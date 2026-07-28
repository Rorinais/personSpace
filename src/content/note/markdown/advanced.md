---
title: 高级语法
date: 2024-07-28
category: 其他
tags: [Markdown, 高级]
related: [html, css]
prev: /note/markdown/math
---

## 表格对齐

在表头分隔线的两侧加 `:` 控制对齐：

```markdown
| 左对齐 | 居中 | 右对齐 |
|:---|:---:|---:|
| L | C | R |
```

| 左对齐 | 居中 | 右对齐 |
|:---|:---:|---:|
| L | C | R |


## 任务列表

在列表的 `[ ]` 里加 `x` 就能打勾，适合做待办清单。

```markdown
- [x] 已完成
- [ ] 未完成
```

[x] 已完成
[ ] 未完成

## 内嵌 HTML

Markdown 里可以直接写 HTML 标签：

```html
<span style="color:red">红色文字</span>
```

<span style="color:red">红色文字</span>

## 转义字符

特殊字符前加反斜杠即可当普通文本显示：

```markdown
\*  \#  \-  \.  \+  \`
```

\*  \#  \-  \.  \+  \`

## 分隔线

三个或以上 `---` `***` `___` 单独一行：

---

## 自动链接

用尖括号包裹 URL 或邮箱，部分 Markdown 编辑器支持自动转换为可点击链接。

```markdown
<https://example.com>
<user@example.com>
```
