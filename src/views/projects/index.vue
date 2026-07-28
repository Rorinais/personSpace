<script setup>
import info from '../../data/Information.json'
import PageLayout from '../../components/PageLayout.vue'
import ProjectCard from '../../components/ProjectCard.vue'
import ArticleSidebar from '../../components/article-sidebar.vue'

const projects = info.projects
const techStack = info.techStack
</script>

<template>
  <PageLayout>
    <div class="projects-page">
      <section class="projects-section">
        <h2>📁 项目作品</h2>
        <ProjectCard v-for="(p, i) in projects" :key="i"
          :name="p.name" :desc="p.intro" :features="p.features"
          :bg-class="'proj-bg-' + (i % 3)">
          <template #links>
            <span class="stack-group">
              <router-link v-for="tech in p.stack" :key="tech"
                :to="techStack[tech] || '/note/empty'" class="stack-pill">{{ tech }}</router-link>
            </span>
            <a :href="p.url" target="_blank">🐙 GitHub</a>
          </template>
        </ProjectCard>
      </section>
    </div>

    <template #sidebar>
      <ArticleSidebar />
    </template>
  </PageLayout>
</template>

<style scoped>
.projects-page { padding-bottom: 40px; }
.projects-section h2 {
  font-size: 1.2rem; font-weight: 700; color: var(--text-heading);
  margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid var(--border-color);
}
.stack-pill {
  font-size: 0.75rem; padding: 3px 10px;
  background: rgba(99,102,241,0.08); color: var(--accent);
  border-radius: 12px; transition: 0.2s;
}
.stack-pill:hover { background: var(--accent); color: #fff; }
</style>
