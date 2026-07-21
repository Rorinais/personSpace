<script setup>
  import notes from '../url-name.json'
  import ArticleSidebar from './article-sidebar.vue'
  let note = notes['note']
</script>

<template>
  <div class="page-layout">
  <div class="page-main">
  <div class="main-note-root">
    <div v-for="(items, indexes) in note" :key="indexes" class="note-section">
      <h3 v-for="(item, index) in items['header']" :key="index">{{ index }}</h3>
      <div class="note-list">
        <router-link v-for="(item, idx) in items['content']" :key="idx"
          :to="item['url']" class="note-card">
          <div class="note-card-inner" :class="'note-bg-' + (idx % 4)">
            <div class="note-card-body">
              <h4>{{ item['name'] }}</h4>
              <p>{{ idx === 0 ? '从零开始学习 shader 编程，掌握 GLSL 语法基础与实战技巧。' : idx === 1 ? '深入理解向量点乘与叉乘的几何意义及其在图形学中的应用。' : idx === 2 ? 'GLSL 语言核心语法速查，变量、函数、内置方法一网打尽。' : idx === 3 ? 'JavaScript 核心概念与实战技巧，前端开发必备基础知识。' : '学习笔记，记录相关知识点与实践心得。' }}</p>
              <span class="note-btn">阅读笔记 →</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  </div>
  <div class="page-side"><ArticleSidebar /></div>
  </div>
</template>

<style scoped>
.page-layout {
  max-width: 1200px; margin: 0 auto; display: flex; gap: 24px; padding: 32px 24px;
}
.page-main { flex: 1; min-width: 0; }
.page-side { width: 260px; flex-shrink: 0; }

.main-note-root { padding-bottom: 40px; }

.note-section {
  margin-bottom: 36px;
}

h3 {
  font-weight: 700;
  padding-left: 14px;
  border-left: 3px solid var(--accent);
  margin: 0 0 16px;
  font-size: 1.15rem;
  color: var(--text-heading);
}

.note-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.note-card {
  display: block;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.25s;
  text-decoration: none;
  color: inherit;
}
.note-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.note-card-inner {
  min-height: 160px;
  background-size: cover;
  background-position: center;
  position: relative;
}
.note-bg-0 { background: #f0fdf4; color: var(--text-heading); }
.note-bg-1 { background: #eef2ff; color: var(--text-heading); }
.note-bg-2 { background: #f0fdfa; color: var(--text-heading); }
.note-bg-3 { background: #fff7ed; color: var(--text-heading); }

.note-card-body {
  padding: 24px 26px;
}
.note-card-body h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.note-card-body p {
  font-size: 0.85rem;
  color: var(--text-body);
  line-height: 1.6;
  margin-bottom: 14px;
}
.note-btn {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent);
}

@media screen and (max-width: 900px) {
  .page-side { display: none; }
  .page-layout { padding: 20px 14px; }
}
@media screen and (max-width: 800px) {
  .note-card-inner { min-height: 130px; }
  .note-card-body { padding: 18px 20px; }
  .note-card-body h4 { font-size: 1rem; }
}
</style>
