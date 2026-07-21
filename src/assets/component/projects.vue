<script setup>
  import ArticleSidebar from './article-sidebar.vue'
</script>

<template>
  <div class="page-layout">
  <div class="page-main">
  <div class="main-projects-root">
    <div class="project-list">
        <!-- 车辆管理系统 -->
        <div class="project-card">
          <div class="project-card-inner proj-bg-0">
            <div class="project-card-body">
              <h4>基于车牌识别的车辆管理系统</h4>
              <p>毕业设计项目，实现最小可用的停车管理系统，支持车牌识别、停车管理、计费支付等。</p>
              <ul class="project-features">
                <li>关键亮点：毫秒级车牌自动识别、入场到出场全流程管理、车位状态实时监控、支付宝快捷支付</li>
                <li>项目收获：掌握网站项目全流程开发经验，学习机器视觉初步知识</li>
              </ul>
              <div class="project-tags">
                <span>Python</span><span>MySQL</span><span>OpenCV</span><span>Django</span>
              </div>
              <div class="project-links">
                <a href="https://github.com/Rorinais/Vehicle-Management-System.git" target="_blank" class="proj-link-gh">🐙 GitHub</a>
                <router-link to="/note" class="proj-link-note">📝 相关笔记</router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- 个人空间 -->
        <div class="project-card">
          <div class="project-card-inner proj-bg-1">
            <div class="project-card-body">
              <h4>个人空间网站</h4>
              <p>Vue 全栈开发实践，部署在服务器上，可随时查看笔记和项目分享给别人。</p>
              <ul class="project-features">
                <li>关键亮点：部署在服务器上，随时查看笔记和项目，分享给他人</li>
                <li>项目收获：掌握网站项目全流程开发经验，学习 Vue 进行网页开发</li>
              </ul>
              <div class="project-tags">
                <span>Vue.js</span><span>HTML</span><span>CSS</span><span>JavaScript</span>
              </div>
              <div class="project-links">
                <a href="https://github.com/Rorinais/personSpace.git" target="_blank" class="proj-link-gh">🐙 GitHub</a>
                <router-link to="/note" class="proj-link-note">📝 相关笔记</router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- OpenGL -->
        <div class="project-card">
          <div class="project-card-inner proj-bg-2">
            <div class="project-card-body">
              <h4>OpenGL渲染引擎开发</h4>
              <p>基于 OpenGL 的渲染引擎，封装渲染数据、键鼠事件、shader、uniform、光照等复杂 API。</p>
              <ul class="project-features">
                <li>架构特点：前后端分离，自动视锥体裁剪、shader材质缓存、uniform集中管理</li>
                <li>项目收获：学习计算机图形理论与实战，了解游戏底层开发流程</li>
              </ul>
              <div class="project-tags">
                <span>C++</span><span>OpenGL</span><span>GLSL</span><span>CMake</span>
              </div>
              <div class="project-links">
                <a href="https://github.com/Rorinais/LearnOpenGL.git" target="_blank" class="proj-link-gh">🐙 GitHub（学习）</a>
                <a href="https://github.com/Rorinais/OpenGL.git" target="_blank" class="proj-link-gh">🐙 GitHub（重构）</a>
                <router-link to="/note" class="proj-link-note">📝 相关笔记</router-link>
              </div>
            </div>
          </div>
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

.main-projects-root { padding-bottom: 40px; }

.project-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-card {
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.25s;
}
.project-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.project-card-inner {
  min-height: 200px;
  position: relative;
}
.proj-bg-0 { background: #eef2ff; color: var(--text-heading); }
.proj-bg-1 { background: #f0fdf4; color: var(--text-heading); }
.proj-bg-2 { background: #fff7ed; color: var(--text-heading); }

.project-card-body {
  padding: 26px 28px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.project-card-body h4 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.project-card-body > p {
  font-size: 0.85rem;
  color: var(--text-body);
  line-height: 1.7;
  margin-bottom: 10px;
}
.project-features {
  list-style: none;
  padding: 0;
  margin-bottom: 14px;
}
.project-features li {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.7;
  padding: 2px 0 2px 14px;
  position: relative;
}
.project-features li::before {
  content: '·';
  position: absolute;
  left: 2px;
  font-weight: bold;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}
.project-tags span {
  padding: 3px 10px;
  font-size: 0.72rem;
  background: rgba(99,102,241,0.08);
  color: var(--accent);
  border-radius: 8px;
}

.project-links {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: auto;
  font-size: 0.84rem;
}
.proj-link-gh {
  color: var(--text-body);
}
.proj-link-gh:hover { color: var(--accent); }
.proj-link-note {
  color: var(--accent);
  margin-left: auto;
}
.proj-link-note:hover { text-decoration: underline; }

@media screen and (max-width: 900px) {
  .page-side { display: none; }
  .page-layout { padding: 20px 14px; }
}
@media screen and (max-width: 800px) {
  .project-card-inner { min-height: 170px; }
  .project-card-body { padding: 20px 22px; }
  .project-card-body h4 { font-size: 1rem; }
  .project-links { flex-wrap: wrap; gap: 10px; }
}
</style>
