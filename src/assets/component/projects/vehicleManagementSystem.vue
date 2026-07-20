<script setup>
</script>

<template>
  <el-container class="project-detail-container">
    <el-main>
      <section class="detail-card">
        <h3>基于车牌识别的车辆管理系统</h3>
        <p>毕业设计项目，实现最小可用的停车管理系统，支持车牌识别、停车管理、计费支付等。 </p>
        <ul>
          <li>核心技术：Python、MySQL、HTML、CSS、JavaScript、OpenCV。</li>
          <li>关键亮点：毫秒级车牌自动识别、入场到出场全流程管理、车位状态实时监控、支付宝快捷支付、临停和月卡能力。</li>
          <li>项目收获：掌握网站项目的全流程开发经验，学习机器视觉初步知识。</li>
        </ul>
        <p>项目地址：<a href="https://github.com/Rorinais/Vehicle-Management-System.git" target="_blank">GitHub →</a></p>
      </section>
    </el-main>
    <el-aside class="detail-aside">
      界面还在开发中
    </el-aside>
  </el-container>
</template>

<style scoped>
.project-detail-container {
  height: 100%;
}

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

.detail-card ul {
  list-style: none;
  padding: 0;
}
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

.detail-card a {
  color: var(--accent);
  font-weight: 500;
}

.detail-aside {
  color: #9ca3af;
  padding: 20px;
}
</style>