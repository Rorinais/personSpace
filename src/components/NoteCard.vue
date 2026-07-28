<!-- 笔记卡片 -->
<script setup>
defineProps({
  name: String,
  desc: String,
  url: String,
  bgClass: String
})
</script>

<template>
  <router-link :to="url" class="note-card">
    <div class="note-card-inner" :class="bgClass">
      <div class="note-card-body">
        <h4>{{ name }}</h4>
        <p>{{ desc || '学习笔记，记录相关知识点与实践心得。' }}</p>
        <span class="note-btn">阅读笔记 →</span>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.note-card {
  display: block; border-radius: var(--radius-md); overflow: hidden;
  box-shadow: var(--shadow-sm); transition: all 0.25s; text-decoration: none; color: inherit;
}
.note-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
.note-card-inner { min-height: 160px; position: relative; }
.note-card-body { padding: 24px 26px; }
.note-card-body h4 { font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; }
.note-card-body p { font-size: 0.85rem; line-height: 1.6; margin-bottom: 14px; color: var(--text-body); }
.note-btn { font-size: 0.82rem; font-weight: 600; color: var(--accent); }

.note-bg-0 { background: #f0fdf4; }
.note-bg-1 { background: #eef2ff; }
.note-bg-2 { background: #f0fdfa; }
.note-bg-3 { background: #fff7ed; }
</style>
