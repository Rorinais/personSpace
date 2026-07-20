<script setup>
</script>

<template>
  <el-container class="project-detail-container">
    <el-main>
      <section class="detail-card">
        <h3>OpenGL渲染引擎开发</h3>
        <p>基于OpenGL的渲染引擎，实现对渲染数据、键鼠事件、shader、uniform、光照等复杂API的封装，降低3D场景的渲染复杂度。</p>
        <ul>
          <li>核心技术：C++、OpenGL、3D渲染。</li>
          <li>架构特点：分为前后端，前端为用户设置的接口，后端为内部解析和执行层。</li>
          <li>关键亮点：简化渲染数据和事件的设置，自动视锥体裁剪提高渲染效率、shader材质缓存、uniform变量集中管理。</li>
          <li>项目收获：学习初级的计算机图形理论与实战知识，了解游戏底层开发流程。</li>
        </ul>
        <p>老项目地址：<a href="https://github.com/Rorinais/LearnOpenGL.git" target="_blank">GitHub</a></p>
        <p>重构项目地址：<a href="https://github.com/Rorinais/OpenGL.git" target="_blank">GitHub（未完成）</a></p>
      </section>
    </el-main>
    <el-aside class="detail-aside">
      界面还在开发中
    </el-aside>
  </el-container>
</template>

<style scoped>
/* 与上面一致 */
.project-detail-container { height: 100%; }
.detail-card {
  background: #ffffff;
  border-radius: var(--radius-lg);
  padding: 28px 32px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-light);
}
.detail-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
}
.detail-card ul { list-style: none; padding: 0; }
.detail-card ul li {
  padding: 8px 16px 8px 30px;
  background: var(--bg-tertiary);
  border-radius: 6px;
  margin: 4px 0;
  position: relative;
}
.detail-card ul li::before {
  content: '●';
  position: absolute;
  left: 14px;
  color: var(--accent);
  font-size: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
}
.detail-card a { color: var(--accent); font-weight: 500; }
.detail-aside { color: #9ca3af; padding: 20px; }
</style>