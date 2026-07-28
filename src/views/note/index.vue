<script setup>
import notes from '../../data/url-name.json'
import ArticleSidebar from '../../components/article-sidebar.vue'
import PageLayout from '../../components/PageLayout.vue'
import NoteCard from '../../components/NoteCard.vue'

let note = notes['note']
</script>

<template>
  <PageLayout>
    <h2>📔 学习笔记</h2>
    <div class="note-page">
      <div v-for="(items, indexes) in note" :key="indexes" class="note-section">
        <h3 v-for="(item, index) in items['header']" :key="index">{{ index }}</h3>
        <div class="note-list">
          <NoteCard
            v-for="(item, idx) in items['content']" :key="idx"
            :name="item.name" :desc="item.desc" :url="item.url"
            :bg-class="'note-bg-' + (idx % 4)"
          />
        </div>
      </div>
    </div>

    <template #sidebar>
      <ArticleSidebar />
    </template>
  </PageLayout>
</template>

<style scoped>
h2 { font-size: 1.2rem; font-weight: 700; color: var(--text-heading); margin-bottom: 20px; padding-bottom: 8px; border-bottom: 2px solid var(--border-color); }
.note-page { padding-bottom: 40px; }
.note-section { margin-bottom: 36px; }
h3 { font-weight: 700; padding-left: 14px; border-left: 3px solid var(--accent); margin: 0 0 16px; font-size: 1.15rem; color: var(--text-heading); }
.note-list { display: flex; flex-direction: column; gap: 12px; }
</style>
