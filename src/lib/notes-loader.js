// 工业标准：Markdown + Frontmatter → 你现有的 {type, text} block 格式
import katex from 'katex'

function renderMath(text) {
  return text
    .replace(/\$\$([^$]+)\$\$/g, (_, f) => {
      try { return katex.renderToString(f.trim(), { displayMode: true, throwOnError: false }) }
      catch { return '$$' + f + '$$' }
    })
    .replace(/\$([^$]+)\$/g, (_, f) => {
      try { return katex.renderToString(f.trim(), { displayMode: false, throwOnError: false }) }
      catch { return '$' + f + '$' }
    })
}

const mdFiles = import.meta.glob('../content/note/**/*.md', {
  query: '?raw', import: 'default', eager: true,
})

// ---------- Frontmatter 解析 ----------
function parseFrontmatter(raw) {
  const meta = {}
  let body = raw
  if (raw.trimStart().startsWith('---')) {
    const end = raw.indexOf('---', 3)
    if (end > 0) {
      const fm = raw.slice(3, end)
      body = raw.slice(end + 3).trim()
      fm.split('\n').forEach(line => {
        const m = line.match(/^(\w+):\s*(.+)/)
        if (!m) return
        const key = m[1]
        let val = m[2].trim()
        if (/^\[.+\]$/.test(val)) {
          const inner = val.slice(1, -1).trim()
          val = inner ? inner.split(',').map(s => s.trim().replace(/['"]/g, '')) : []
        }
        meta[key] = val
      })
    }
  }
  return { meta, body }
}

// ---------- Markdown → block 格式 ----------
function mdToBlocks(md) {
  if (!md) return []
  const blocks = []
  const lines = md.split('\n')
  let buf = []
  let inQuote = false
  let inCode = false
  let codeFence = ''   // 记录开头的反引号数量
  let codeLang = ''

  function flush() {
    const text = buf.join('<br>').trim()
    if (text) blocks.push({ type: 'p', text })
    buf = []
  }
  function flushQuote() {
    let text = buf.join('<br>').trim()
    const linkMatch = text.match(/\[(.+?)\]\((\/.+?)\)/)
    if (linkMatch) {
      blocks.push({ type: 'tip', text: text.replace(linkMatch[0], '').trim(), link: linkMatch[2], linkText: linkMatch[1] })
    } else {
      blocks.push({ type: 'tip', text })
    }
    buf = []
    inQuote = false
  }
  function flushCode() {
    const text = buf.join('\n').trim()
    if (text) blocks.push({ type: 'code', lang: codeLang, text })
    buf = []
    inCode = false
    codeLang = ''
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // 代码块边界 ```
    const fenceMatch = line.trim().match(/^(`{3,})/)
    if (fenceMatch) {
      const fenceLen = fenceMatch[1].length
      if (inCode) {
        // 同数量反引号才关闭
        if (!codeFence || fenceLen === codeFence.length) { flushCode(); continue }
      } else {
        if (buf.length) inQuote ? flushQuote() : flush()
        inCode = true
        codeFence = fenceMatch[1]
        codeLang = line.trim().slice(fenceLen).trim()
        continue
      }
    }
    // 代码块内的行
    if (inCode) { buf.push(line); continue }

    if (line.startsWith('> ')) {
      if (!inQuote) { if (buf.length) flush(); inQuote = true }
      buf.push(line.slice(2))
      continue
    }
    if (/^#{1,4}\s/.test(line)) {
      if (buf.length) inQuote ? flushQuote() : flush()
      blocks.push({ type: 'h2', text: line.replace(/^#{1,4}\s*/, '') })
      inQuote = false; continue
    }
    if (line.trim() === '') {
      if (buf.length) inQuote ? flushQuote() : flush()
      inQuote = false; continue
    }
    inQuote = false

    // 表格行：含 | 且下一行或本行是分隔行
    if (line.includes('|') && line.trim().match(/^\|.+\|$/)) {
      if (buf.length) flush()
      // 收集表格行直到没有 |
      const tableRows = []
      let ti = i
      while (ti < lines.length && lines[ti].includes('|') && lines[ti].trim().match(/^\|.+\|$/)) {
        tableRows.push(lines[ti]); ti++
      }
      // 跳过分隔行（第二行）
      if (tableRows.length >= 2 && tableRows[1].includes('---')) {
        // 表格每个单元格都渲染数学公式
        const mathRows = tableRows.map(row => {
          return row.split('|').map(cell => renderMath(cell.trim())).join(' | ')
        })
        blocks.push({ type: 'table', text: mathRows.join('\n') })
        i = ti - 1; continue
      }
      // 不是有效表格，回退
      buf.push(line); continue
    }

    // 0. 数学公式
    const mathRendered = renderMath(line)
    // 1. 提走 code 用占位符保护
    const codes = []
    let processed = mathRendered.replace(/`([^`]+)`/g, (_, c) => {
      const escaped = c.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      codes.push('<code>' + escaped + '</code>')
      return '\x00CODE' + (codes.length - 1) + '\x00'
    })
    // 2. 格式化（先保护 LaTeX 里的 \\）
    processed = processed.replace(/\\\\/g, '\x00BS\x00')
    processed = processed
      .replace(/\\([*#\-.+`])/g, '$1')
    processed = processed.replace(/\x00BS\x00/g, '\\\\')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/~~(.+?)~~/g, '<del>$1</del>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    // 3. 还原 code
    processed = processed.replace(/\x00CODE(\d+)\x00/g, (_, i) => codes[+i])
    buf.push(processed)
  }
  if (buf.length) flush()
  return blocks
}

// ---------- 构建索引 ----------
const noteMap = {}
for (const [rawPath, raw] of Object.entries(mdFiles)) {
  const { meta, body } = parseFrontmatter(raw)
  const rel = rawPath.replace(/.*\/content\/note\//, '')
  const [noteId, fileName] = rel.split('/')
  const page = fileName?.replace('.md', '') || 'index'
  if (!noteMap[noteId]) noteMap[noteId] = {}
  noteMap[noteId][page] = {
    title: meta.title || noteId,
    date: meta.date || '',
    category: meta.category || '',
    tags: meta.tags || [],
    related: meta.related || [],
    prev: meta.prev || '',
    next: meta.next || '',
    content: mdToBlocks(body),
  }
}

export function getNotePage(noteId, page = 'index') {
  return noteMap[noteId]?.[page] || null
}
export function getNotePages(noteId) {
  return Object.keys(noteMap[noteId] || {}).filter(p => p !== 'index')
}
