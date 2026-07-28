<script setup>
import info from '../data/Information.json'
import PageLayout from '../components/PageLayout.vue'
import ArticleSidebar from '../components/article-sidebar.vue'

const person = info.information
const projects = info.projects
const techStack = info.techStack
</script>

<template>
  <PageLayout>
    <div class="resume-page">
      <header class="resume-header">
        <div class="avatar-img"></div>
        <div class="header-info">
          <h1>{{ person.name }}</h1>
          <p>图形学 / 渲染引擎开发</p>
          <div class="header-meta">
            <span>📧 {{ person.email }}</span>
            <span>🎂 {{ person.birthday }}</span>
            <a :href="person.github" target="_blank">🐙 GitHub</a>
            <a :href="person.bilibili" target="_blank">📺 Bilibili</a>
          </div>
        </div>
      </header>

      <section class="resume-section">
        <h2>📁 项目经验</h2>
        <div class="proj-list">
          <div v-for="p in projects" :key="p.name" class="proj-item">
            <div class="proj-head">
              <h3>{{ p.name }}</h3>
              <span class="proj-date">{{ p.date }}</span>
            </div>
            <p class="proj-intro">{{ p.intro }}</p>
            <div class="proj-features">
              <span v-for="f in p.features" :key="f">{{ f }}</span>
            </div>
            <div class="proj-stack">
              <span class="stack-group">
                <router-link v-for="tech in p.stack" :key="tech"
                  :to="techStack[tech] || '/note/empty'" class="stack-pill">{{ tech }}</router-link>
              </span>
              <a :href="p.url" target="_blank">🐙 GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </div>

    <template #sidebar>
      <ArticleSidebar />
    </template>
  </PageLayout>
</template>

<style scoped>
.resume-page { max-width: 800px; padding-bottom: 40px; }

.resume-header { display: flex; align-items: center; gap: 24px; padding: 32px; background: var(--bg-secondary); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-bottom: 36px; }
.avatar-img { width: 90px; height: 90px; border-radius: 50%; background-image: url('/images/avatar.jpg'); background-position: center; background-size: cover; border: 3px solid var(--border-color); flex-shrink: 0; }
.header-info h1 { font-size: 1.6rem; font-weight: 800; color: var(--text-heading); }
.header-info > p { color: var(--accent); font-weight: 500; margin: 2px 0 8px; }
.header-meta { display: flex; flex-wrap: wrap; gap: 16px; font-size: 0.82rem; color: var(--text-body); }
.header-meta a { color: var(--accent); }

.resume-section { margin-bottom: 36px; }
.resume-section h2 { font-size: 1.1rem; font-weight: 700; color: var(--text-heading); margin-bottom: 14px; padding-bottom: 8px; border-bottom: 2px solid var(--border-color); }

.proj-list { display: flex; flex-direction: column; gap: 16px; }
.proj-item { padding: 22px 26px; background: var(--bg-secondary); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); }
.proj-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
.proj-head h3 { font-size: 1.05rem; font-weight: 700; color: var(--text-heading); }
.proj-date { font-size: 0.78rem; color: var(--text-muted); }
.proj-intro { font-size: 0.85rem; color: var(--text-body); margin-bottom: 10px; }
.proj-features { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
.proj-features span { padding: 2px 10px; font-size: 0.72rem; background: rgba(99,102,241,0.07); color: var(--accent); border-radius: 8px; }
.proj-stack { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; }
.stack-group { display: flex; gap: 8px; flex-wrap: wrap; }
.stack-pill { font-size: 0.75rem; padding: 3px 10px; background: rgba(99,102,241,0.08); color: var(--accent); border-radius: 12px; transition: 0.2s; }
.stack-pill:hover { background: var(--accent); color: #fff; }
.proj-stack a:last-child { color: var(--accent); font-size: 0.85rem; }
</style>
