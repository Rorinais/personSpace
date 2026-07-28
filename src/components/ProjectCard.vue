<!-- 项目卡片 -->
<script setup>
defineProps({
  name: String,
  desc: String,
  features: { type: Array, default: () => [] },
  tags: { type: Array, default: () => [] },
  bgClass: { type: String, default: 'proj-bg-0' }
})
</script>

<template>
  <div class="project-card">
    <div class="project-card-inner" :class="bgClass">
      <div class="project-card-body">
        <h4>{{ name }}</h4>
        <p>{{ desc }}</p>
        <ul v-if="features.length" class="project-features">
          <li v-for="(f, i) in features" :key="i">{{ f }}</li>
        </ul>
        <div class="project-tags" v-if="tags.length">
          <span v-for="tag in tags" :key="tag">{{ tag }}</span>
        </div>
        <div class="project-links">
          <slot name="links" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card { border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); transition: all 0.25s; }
.project-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
.project-card-inner { min-height: 200px; position: relative; }
.proj-bg-0 { background: #eef2ff; color: var(--text-heading); }
.proj-bg-1 { background: #f0fdfa; color: var(--text-heading); }
.proj-bg-2 { background: #f5f5f4; color: var(--text-heading); }
.project-card-body { padding: 26px 28px; display: flex; flex-direction: column; height: 100%; }
.project-card-body h4 { font-size: 1.15rem; font-weight: 700; margin-bottom: 8px; }
.project-card-body > p { font-size: 0.85rem; color: var(--text-body); line-height: 1.7; margin-bottom: 10px; }
.project-features { list-style: none; padding: 0; margin-bottom: 14px; }
.project-features li { font-size: 0.8rem; color: var(--text-body); line-height: 1.7; padding: 2px 0 2px 14px; position: relative; }
.project-features li::before { content: '·'; position: absolute; left: 2px; font-weight: bold; }
.project-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
.project-tags span { padding: 3px 10px; font-size: 0.72rem; background: rgba(99,102,241,0.1); color: var(--accent); border-radius: 8px; }
.project-links { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: auto; font-size: 0.84rem; }
.project-links a { color: var(--accent); }
.stack-group { display: flex; gap: 8px; }
</style>
