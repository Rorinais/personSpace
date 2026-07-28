<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { getNotePage, getNotePages } from '../../lib/notes-loader.js'
import ArticleSidebar from '../../components/article-sidebar.vue'
import CodeBlock from '../../components/CodeBlock.vue'

const route = useRoute()
const note = computed(() => getNotePage(route.params.id, route.params.page || 'index'))
const pages = computed(() => getNotePages(route.params.id).filter(p => p !== 'index'))

const headings = computed(() => {
  if (!note.value?.content) return []
  return note.value.content
    .filter(b => b.type === 'h2')
    .map((b, i) => ({ id: 'h-' + i, text: b.text }))
})

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function tableHtml(raw) {
  const rows = raw.split('\n').filter(r => r.trim())
  let html = ''
  rows.forEach((row, ri) => {
    const cells = row.split('|').filter(c => c.trim())
    const isSep = cells.every(c => /^:?-+:?$/.test(c.trim()))
    if (isSep) return
    html += '<tr>'
    cells.forEach(cell => {
      html += (ri === 0 ? '<th>' : '<td>') + cell.trim() + (ri === 0 ? '</th>' : '</td>')
    })
    html += '</tr>'
  })
  return html
}
</script>

<template>
  <div class="page-layout">
    <div class="page-main">
      <div v-if="note" class="note-detail">
        <header class="note-header">
          <span class="note-cat">{{ note.category }}</span>
          <h1>{{ note.title }}</h1>
          <time>{{ note.date }}</time>
        </header>

        <article class="note-body">
          <template v-for="(block, i) in note.content" :key="i">
            <h2 v-if="block.type === 'h2'" :id="'h-' + headings.findIndex(h => h.text === block.text)">{{ block.text }}</h2>
            <p v-if="block.type === 'p'" v-html="block.text"></p>
            <blockquote v-if="block.type === 'tip'" class="note-tip">
              <span v-html="block.text"></span>
              <router-link :to="block.link" v-if="block.link">{{ block.linkText }}</router-link>
            </blockquote>
            <table v-if="block.type === 'table'" class="md-table" v-html="tableHtml(block.text)"></table>
            <CodeBlock v-if="block.type === 'code'" :code="block.text" :lang="block.lang" />
          </template>
        </article>

        <div class="note-related" v-if="note.related && note.related.length">
          <h3>相关笔记</h3>
          <div class="related-links">
            <router-link v-for="id in note.related" :key="id" :to="'/note/' + id" class="related-link">{{ id }}</router-link>
          </div>
        </div>

        <div class="note-tags" v-if="note.tags?.length">
          <span v-for="tag in note.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>

        <nav class="note-pager" v-if="note.prev || note.next">
          <router-link :to="note.prev" v-if="note.prev" class="pager-link prev">← {{ note.prev.split('/').pop() }}</router-link>
          <span v-else></span>
          <router-link :to="note.next" v-if="note.next" class="pager-link next">{{ note.next.split('/').pop() }} →</router-link>
        </nav>

        <router-link to="/note" class="back-link">← 返回笔记列表</router-link>
      </div>
      <div v-else class="note-empty">
        <h2>笔记不存在</h2>
        <router-link to="/note">← 返回笔记列表</router-link>
      </div>
    </div>

    <div class="page-side">
      <ArticleSidebar :headings="headings" @scroll-to="scrollTo" />
      <nav v-if="pages.length" class="sub-pages">
        <h4>子页面</h4>
        <router-link v-for="p in pages" :key="p"
          :to="'/note/' + route.params.id + '/' + p" class="sub-link">{{ p }}</router-link>
      </nav>
    </div>
  </div>
</template>


<style scoped>
.page-layout { max-width: 1200px; margin: 0 auto; display: flex; gap: 24px; padding: 32px 24px; }
.page-main { flex: 1; min-width: 0; }
.page-side { width: 220px; flex-shrink: 0; }

.note-detail { background: var(--bg-secondary); border-radius: var(--radius-lg); padding: 36px 40px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); }
.note-header { margin-bottom: 28px; }
.note-cat { font-size: 0.78rem; color: var(--accent); background: rgba(99,102,241,0.08); padding: 3px 12px; border-radius: 10px; }
.note-header h1 { font-size: 1.8rem; font-weight: 800; color: var(--text-heading); margin: 12px 0 6px; }
.note-header time { font-size: 0.82rem; color: var(--text-muted); }

.note-body { line-height: 1.9; color: var(--text-body); }
.note-body h2 { font-size: 1.2rem; font-weight: 700; color: var(--text-heading); margin: 36px 0 12px; padding-bottom: 8px; border-bottom: 2px solid var(--border-color); scroll-margin-top: 80px; }
.note-body p { margin-bottom: 14px; font-size: 0.95rem; }
.note-body :deep(code) { background: var(--bg-tertiary); padding: 2px 6px; border-radius: 4px; font-size: 0.9em; color: var(--accent); }
.note-body :deep(strong) { color: var(--text-heading); }

.note-tip { margin: 24px 0; padding: 16px 20px; background: #eef2ff; border-left: 4px solid var(--accent); border-radius: 0 var(--radius-md) var(--radius-md) 0; font-size: 0.9rem; color: var(--text-body); }
.note-tip a { display: block; margin-top: 6px; font-weight: 600; }

.md-table { width: 100%; border-collapse: collapse; margin: 18px 0; }
.md-table :deep(th), .md-table :deep(td) { border: 1px solid var(--border-color); padding: 8px 14px; text-align: left; font-size: 0.92rem; }
.md-table :deep(th) { background: var(--bg-tertiary); font-weight: 600; }
.md-table :deep(tr:nth-child(even) td) { background: rgba(0,0,0,0.02); }

.note-related { margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--border-color); }
.note-related h3 { font-size: 0.95rem; color: var(--text-heading); margin-bottom: 10px; }
.related-links { display: flex; flex-wrap: wrap; gap: 8px; }
.related-link { padding: 6px 14px; background: var(--bg-tertiary); border-radius: 8px; font-size: 0.82rem; color: var(--text-body); transition: 0.2s; }
.related-link:hover { background: var(--accent); color: #fff; }

.note-tags { margin-top: 20px; display: flex; flex-wrap: wrap; gap: 6px; }
.tag { padding: 3px 10px; font-size: 0.72rem; background: rgba(99,102,241,0.06); color: var(--accent); border-radius: 8px; }

.note-pager { display: flex; justify-content: space-between; margin-top: 28px; padding-top: 20px; border-top: 1px solid var(--border-color); }
.pager-link { font-size: 0.85rem; color: var(--accent); font-weight: 500; }

.back-link { display: inline-block; margin-top: 16px; font-size: 0.85rem; font-weight: 500; }

.sub-pages { margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border-color); }
.sub-pages h4 { font-size: 0.72rem; color: var(--text-muted); margin-bottom: 8px; }
.sub-link { display: block; font-size: 0.8rem; color: var(--text-body); padding: 4px 6px; border-radius: 4px; }
.sub-link:hover { color: var(--accent); background: rgba(99,102,241,0.04); }

.note-empty { text-align: center; padding: 80px 20px; }
.note-empty h2 { color: var(--text-muted); }

@media screen and (max-width: 900px) {
  .page-side { display: none; }
  .page-layout { padding: 20px 14px; }
  .note-detail { padding: 24px 20px; }
}
</style>
