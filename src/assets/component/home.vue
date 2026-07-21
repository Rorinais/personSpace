<!-- /home/rorinais/Desktop/vue-project/src/assets/component/home.vue -->
<script setup>
import { blogPosts, getCategories } from '../data/blog-posts.js'
import personInfo from '../person.json'
import projects from '../url-name.json'
import { ref } from 'vue'

const person = personInfo.person
const projectList = projects.projects || []
const noteList = projects.note || []
const allPosts = blogPosts
const categories = getCategories()
const activeTab = ref('全部')

const filteredPosts = ref(allPosts)
function setTab(cat) {
  activeTab.value = cat
  filteredPosts.value = cat === '全部' ? allPosts : allPosts.filter(p => p.category === cat)
}

// 摊平项目列表
const flatProjects = []
projectList.forEach(cat => {
  cat.content.forEach(item => flatProjects.push(item))
})
const flatNotes = []
noteList.forEach(cat => {
  cat.content.forEach(item => flatNotes.push(item))
})
</script>

<template>
  <div class="bento-root">
    <div class="bento-bg"></div>

    <div class="bento-content">
      <!-- 左区域：头像 + 名字 + 签名 + 导航 -->
      <div class="hero-left">
        <div class="avatar-img"></div>
        <h1 class="hero-name">{{ person.name }}</h1>
        <p class="hero-tagline">热爱编程与图形学</p>
        <nav class="hero-nav">
          <router-link to="/projects" class="hero-nav-link">项目</router-link>
          <router-link to="/note"     class="hero-nav-link">笔记</router-link>
          <router-link to="/message"  class="hero-nav-link">留言</router-link>
          <router-link to="/about"    class="hero-nav-link">关于</router-link>
        </nav>
      </div>

      <!-- 右区域：卡片 -->
      <div class="right-main">
        <div class="card-grid">

          <!-- 关于我 -->
          <router-link to="/about" class="card card-about">
            <div class="card-inner" :style="{backgroundImage: 'url(/images/img.png)'}">
              <div class="card-overlay"></div>
              <div class="card-body">
                <h2>{{ person.name }}</h2>
                <p>{{ person.education }}</p>
                <span class="card-btn">关于我 →</span>
              </div>
            </div>
          </router-link>

          <!-- 个人资料 -->
          <div class="card card-person-info">
            <div class="card-inner bg-white">
              <div class="card-body">
                <h2>📋 个人资料</h2>
                <div class="info-grid">
                  <div><label>生日</label><span>{{ person.birthday }}</span></div>
                  <div><label>学历</label><span>{{ person.education }}</span></div>
                  <div><label>电话</label><span>{{ person.phone }}</span></div>
                  <div><label>邮箱</label><span>413843928@qq.com</span></div>
                </div>
              </div>
            </div>
          </div>

          <!-- GitHub -->
          <a href="https://github.com/Rorinais" target="_blank" class="card card-github">
            <div class="card-inner bg-dark">
              <div class="card-body">
                <p class="card-icon">🐙</p>
                <h3>GitHub</h3>
                <span class="card-stat">@Rorinais</span>
              </div>
            </div>
          </a>

          <!-- Bilibili -->
          <a href="https://space.bilibili.com" target="_blank" class="card card-bili">
            <div class="card-inner bg-pink">
              <div class="card-body">
                <p class="card-icon">📺</p>
                <h3>Bilibili</h3>
                <span class="card-stat">视频创作</span>
              </div>
            </div>
          </a>

          <!-- Gitee -->
          <a href="https://gitee.com/rorinais" target="_blank" class="card card-gitee">
            <div class="card-inner bg-red">
              <div class="card-body">
                <p class="card-icon">🔧</p>
                <h3>Gitee</h3>
                <span class="card-stat">@Rorinais</span>
              </div>
            </div>
          </a>

          <!-- Email -->
          <a href="mailto:413843928@qq.com" class="card card-email">
            <div class="card-inner bg-teal">
              <div class="card-body">
                <p class="card-icon">📧</p>
                <h3>Email</h3>
                <span class="card-stat">联系我</span>
              </div>
            </div>
          </a>

          <!-- 学习笔记 -->
          <router-link to="/note" class="card card-notes-link">
            <div class="card-inner bg-green">
              <div class="card-body">
                <h2>学习笔记</h2>
                <p>{{ flatNotes.map(n => n.name).slice(0, 4).join(' / ') }}...</p>
                <span class="card-btn">查看全部 →</span>
              </div>
            </div>
          </router-link>

          <!-- 项目作品 -->
          <router-link to="/projects" class="card card-projects-main">
            <div class="card-inner bg-accent">
              <div class="card-body">
                <h2>项目作品</h2>
                <p>{{ flatProjects.map(p => p.name).join(' / ') }}</p>
                <span class="card-btn">查看全部 →</span>
              </div>
            </div>
          </router-link>

          <!-- 文章列表 -->
          <div class="card card-articles-wide">
            <div class="card-inner bg-white">
              <div class="card-body">
                <h2>📝 最新文章</h2>
                <!-- tabs -->
                <div class="tab-bar">
                  <span v-for="cat in [{name:'全部',count:allPosts.length}, ...categories]"
                    :key="cat.name"
                    class="tab-item"
                    :class="{active: activeTab === cat.name}"
                    @click="setTab(cat.name)"
                  >{{ cat.name }}</span>
                </div>
                <div class="article-items">
                  <router-link v-for="post in filteredPosts.slice(0, 5)" :key="post.id"
                    :to="post.route" class="article-row">
                    <span class="art-date">{{ post.displayDate }}</span>
                    <span class="art-title">{{ post.title }}</span>
                  </router-link>
                </div>
                <router-link to="/note" class="card-btn more-link">查看更多 →</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <footer class="bento-footer">
      <span>Copyright © 2024 Rorinais</span>
      <span>桂ICP备2024044764号-1</span>
    </footer>
  </div>
</template>

<style scoped>
.bento-root {
  min-height: 100vh;
  background: linear-gradient(160deg, #f8fafc 0%, #f1f5f9 40%, #fef3f2 100%);
  position: relative;
}
.bento-bg {
  position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(circle at 25% 20%, rgba(99,102,241,0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 40%, rgba(251,146,60,0.04) 0%, transparent 50%);
}

/* ====== 左右布局 ====== */
.bento-content {
  position: relative; z-index: 1;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: flex-start;
}

/* ====== 左区域 ====== */
.hero-left {
  width: 30%;
  flex-shrink: 0;
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 16px 40px 4px;
}
.avatar-img {
  width: min(180px, 16vw);
  height: min(180px, 16vw);
  border-radius: 50%;
  background-image: url('/images/avatar.jpg');
  background-position: center center;
  background-size: cover;
  box-shadow: 0 8px 32px rgba(99,102,241,0.15);
  border: 4px solid rgba(255,255,255,0.8);
}
.hero-name {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-heading);
  margin-top: 28px;
}
.hero-tagline {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-top: 8px;
  line-height: 1.6;
}
.hero-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 24px;
}
.hero-nav-link {
  font-size: 0.9rem;
  color: var(--text-body);
  padding: 4px 4px;
  border-radius: 6px;
  transition: 0.2s;
}
.hero-nav-link:hover {
  background: rgba(99,102,241,0.06);
  color: var(--accent);
}

/* ====== 右区域 ====== */
.right-main {
  width: 70%;
  flex-shrink: 0;
  padding: 80px 0 40px 20px;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

/* ====== 卡片通用 ====== */
.card {
  display: block;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(0,0,0,0.14);
}
.card-inner {
  width: 100%; height: 100%; min-height: 140px;
  background-size: cover; background-position: center;
  position: relative;
}
.card-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.35), rgba(0,0,0,0.05));
  z-index: 1;
}
.card-body {
  position: relative; z-index: 2;
  padding: 20px 22px;
  display: flex; flex-direction: column;
}
.card-body h2 { font-size: 1.15rem; font-weight: 700; margin-bottom: 6px; }
.card-body h3 { font-size: 1.05rem; font-weight: 700; }
.card-body p  { font-size: 0.82rem; line-height: 1.6; color: var(--text-body); }
.card-btn {
  margin-top: auto; padding-top: 12px;
  font-size: 0.8rem; font-weight: 600; color: var(--accent);
}
.card-icon { font-size: 1.4rem; margin-bottom: 4px; }
.card-stat { font-size: 0.8rem; color: var(--text-muted); }

/* 彩色背景 */
.bg-accent { background: #eef2ff; color: var(--text-heading); }
.bg-dark   { background: #f5f5f4; color: var(--text-heading); }
.bg-pink   { background: #fdf2f8; color: var(--text-heading); }
.bg-red    { background: #fef2f2; color: var(--text-heading); }
.bg-teal   { background: #f0fdfa; color: var(--text-heading); }
.bg-green  { background: #f0fdf4; color: var(--text-heading); }
.bg-white  { background: #fff; color: var(--text-heading); }

/* ====== 卡片位置 ====== */
.card-about        { grid-column: span 2; }
.card-about .card-inner { min-height: 180px; }
.card-about .card-body { color: #fff; }

.card-projects-main { grid-column: span 2; }
.card-projects-main .card-inner { min-height: 180px; }

.card-github,
.card-bili,
.card-gitee,
.card-email { grid-column: span 1; }
.card-github .card-inner,
.card-bili .card-inner,
.card-gitee .card-inner,
.card-email .card-inner { min-height: 120px; }

.card-articles-wide { grid-column: span 4; }
.card-articles-wide .card-body { padding: 24px 28px; }

.card-notes-link { grid-column: span 2; }
.card-notes-link .card-inner { min-height: 160px; }

.card-person-info { grid-column: span 2; }

/* ====== 文章卡片内部 ====== */
.tab-bar {
  display: flex; flex-wrap: wrap; gap: 6px;
  margin: 14px 0 16px;
}
.tab-item {
  padding: 4px 14px; font-size: 0.8rem;
  border-radius: 10px; cursor: pointer;
  background: var(--bg-tertiary); color: var(--text-body);
  transition: 0.2s; user-select: none;
}
.tab-item:hover, .tab-item.active {
  background: var(--accent); color: #fff;
}
.article-items {
  display: flex; flex-direction: column; gap: 4px;
}
.article-row {
  display: flex; align-items: baseline; gap: 12px;
  padding: 7px 8px; border-radius: 8px;
  transition: 0.2s; text-decoration: none; color: inherit;
}
.article-row:hover { background: var(--bg-tertiary); }
.art-date { font-size: 0.78rem; color: var(--text-muted); min-width: 78px; flex-shrink: 0; }
.art-title { font-size: 0.9rem; color: var(--text-body); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.more-link { display: block; text-align: right; padding-top: 10px; color: var(--accent); font-weight: 600; }

/* 资料 */
.info-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 12px 20px; margin-top: 8px;
}
.info-grid label { font-size: 0.78rem; color: var(--text-muted); display: block; }
.info-grid span  { font-size: 0.88rem; color: var(--text-body); }

/* 底部 */
.bento-footer {
  position: relative; z-index: 1; text-align: center;
  padding: 20px 24px 28px; display: flex; justify-content: center; gap: 16px;
  font-size: 0.72rem; color: var(--text-muted);
}

/* ====== 响应式 ====== */
@media screen and (max-width: 1024px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .card-about, .card-projects-main, .card-notes-link, .card-person-info,
  .card-articles-wide { grid-column: span 2; }
}

@media screen and (max-width: 800px) {
  .bento-content { flex-direction: column; padding: 0 14px; }
  .hero-left {
    width: 100%; height: auto; position: relative;
    align-items: center; text-align: center;
    padding: 40px 0 24px;
  }
  .avatar-img { width: 100px; height: 100px; }
  .hero-name { font-size: 1.5rem; margin-top: 16px; }
  .hero-tagline { font-size: 0.85rem; }
  .hero-nav { flex-direction: row; gap: 8px; }
  .right-main { width: 100%; padding: 0 0 40px; }
}

@media screen and (max-width: 480px) {
  .card-grid { grid-template-columns: 1fr; }
  .card-about, .card-projects-main, .card-notes-link, .card-person-info,
  .card-articles-wide, .card-github, .card-bili, .card-gitee, .card-email { grid-column: span 1; }
}
</style>
