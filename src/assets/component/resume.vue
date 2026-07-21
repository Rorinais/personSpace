<script setup>
import personInfo from '../person.json'
</script>

<template>
  <div class="resume-wrapper">
    <header class="resume-header">
      <div class="head-left">
        <div class="resume-name">
          <div class="name">{{ personInfo.person.name }}</div>
          <div class="position">职位: {{ personInfo.person.position }}</div>
        </div>
        <div class="personal-info">
          <div class="info-item"><b>生日:</b> {{ personInfo.person.birthday }}</div>
          <div class="info-item"><b>电话:</b>{{ personInfo.person.phone }}</div>
          <div class="info-item"><b>学历:</b>{{ personInfo.person.education }}</div>
          <div class="info-item"><b>邮箱:</b>{{ personInfo.person.email }}</div>
        </div>
      </div>
      <div class="head-right">
        <img src="/images/avatar.png" class="avatar" alt="头像" />
      </div>
    </header>

    <main class="resume-main">
      <div class="educationBackground">
        <h3 class="subtitle">教育背景</h3>
        <div v-for="(item, index) of personInfo.education" :key="index">
          <div class="boxwrapper">
            <div class="schoolData">{{ item.date }}</div>
            <div class="schoolData">{{ item.school }}</div>
            <div class="schoolData">{{ item.profession }}</div>
          </div>
          <div class="course">{{ item.desc }}</div>
        </div>
      </div>

      <div class="collegeExperience">
        <h3 class="subtitle">校园经历</h3>
        <ul>
          <li v-for="(item, index) in personInfo.experience" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="personalSkill">
        <h3 class="subtitle">个人技能</h3>
        <ul>
          <li v-for="(item, index) in personInfo.skills" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="projects">
        <h3 class="subtitle">项目经验</h3>
        <div v-for="(item, index) in personInfo.projects" :key="index">
          <div class="up-block">
            <div class="projectName"><b>项目{{ index+1 }}: {{ item.name }}</b></div>
            <div class="projectdate"><b>{{ item.date }}</b></div>
          </div>
          <div class="projectTaget">项目目标: {{ item.target }}</div>
          <div class="projectCourse">
            项目过程：
            <ul>
              <li v-for="(i, idx) in personInfo.projects[index].course" :key="idx">{{ i }}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.resume-wrapper {
  max-width: 900px;
  margin: 0 auto;
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  box-shadow: 0 20px 48px rgba(0,0,0,0.12);
  overflow: hidden;
}

.resume-header {
  display: flex;
  background: linear-gradient(135deg, #1e2a3a, #2d3d54);
  padding: 28px 32px;
  gap: 24px;
  align-items: center;
  color: #fff;
}

.head-left {
  flex: 1;
}
.resume-name {
  display: flex;
  align-items: flex-end;
  gap: 16px;
  margin-bottom: 16px;
}
.name {
  font-size: 2rem;
  font-weight: 800;
}
.position {
  font-size: 1rem;
  color: #bcc8e0;
  padding-bottom: 4px;
}

.personal-info {
  display: flex;
  flex-wrap: wrap;
}
.info-item {
  width: 48%;
  font-size: 0.85rem;
  color: #c8d2e2;
  padding: 4px 0;
}
.info-item b {
  color: #fff;
}

.avatar {
  width: 100px;
  height: 130px;
  border-radius: var(--radius-md);
  object-fit: cover;
  border: 3px solid rgba(255,255,255,0.2);
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}

.resume-main {
  padding: 28px 32px;
}

.subtitle {
  display: inline-block;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 6px 18px;
  border-radius: 20px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(102,126,234,0.3);
}

.boxwrapper {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 10px 14px;
  background: var(--bg-tertiary);
  border-radius: 8px;
  margin-bottom: 8px;
}

.course {
  color: #8b919e;
  font-size: 0.85rem;
  padding-left: 14px;
  margin-bottom: 16px;
}

ul {
  list-style: none;
  padding-left: 0;
}
ul li {
  padding: 8px 14px 8px 28px;
  margin: 4px 0;
  background: var(--bg-tertiary);
  border-radius: 6px;
  position: relative;
  color: #374151;
}
ul li::before {
  content: '▸';
  position: absolute;
  left: 12px;
  color: var(--accent);
}

.up-block {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}
.projectdate {
  color: #8b919e;
  font-size: 0.85rem;
}
</style>
