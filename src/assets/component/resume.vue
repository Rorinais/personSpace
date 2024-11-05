<script setup>
import personInfo from '../person.json'
console.log('person', personInfo)
</script>

<template>
  <header class="header">
    <div class="head-left">
      <div class="resume-name">
        <div class="name">{{ personInfo.person.name }}</div>
        <div class="position">职位: {{ personInfo.person.position }}</div>
      </div>
      <div class="personal-info">
        <div class="info-item birthday"><b>生日:</b> {{ personInfo.person.birthday }}</div>
        <div class="info-item telephone"><b>电话:</b>{{ personInfo.person.phone }}</div>
        <div class="info-item education"><b>学历:</b>{{ personInfo.person.education }}</div>
        <div class="info-item email"><b>邮箱:</b>{{ personInfo.person.email }}</div>

      </div>
    </div>
    <div class="head-right">
      <img src="/images/avatar.png" class="avatar" />
    </div>
  </header>
  <main class="main">
    <div class="educationBackground">
      <h3 class="subtitle">教育背景</h3>

      <div v-for="(item,index) of personInfo.education " v-bind:key="index">
        <div class="boxwrapper">
          <div class="schoolData schooltime">{{ item.date }}</div>
          <div class="schoolData school">{{item.school }}</div>
          <div class="schoolData profession">{{item.profession }}</div>
        </div>
        <div class="course">{{ item.desc}}</div>
      </div>
    </div>

    <div class="collegeExperience">
      <h3 class="subtitle">校园经历</h3>
      <div>
        <ul>
          <li v-for="(item,index) in personInfo.experience" v-bind:key="index">
           {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div class="personalSkill">
      <h3 class="subtitle">个人技能</h3>
      <div>
        <ul>
          <li v-for="(item,index) in personInfo.skills" :key="index">
           {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div class="projects">
      <h3 class="subtitle">项目经验</h3>
      <div v-for="(item,index) in personInfo.projects" :key="index">
        <div class="up-block">
          <div class="projectData projectName"><b>项目{{ index+1 }}名称:{{ item.name }}</b></div>
          <div class="projectData projectdate"><b>{{ item.date }}</b></div>
        </div>
        <div class="projectTaget">项目目标:{{ item.target }}</div>
        <div class="projectCourse">
        项目过程：
          <ul>
            <li v-for="(i,index) in personInfo.projects[index].course" :key="index">
             {{i}}
            </li>
          </ul>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>
.header {
  display: flex;
}
.resume-name {
  width: 700px;
  display: flex;
  padding: 16px;
  font-size: xx-large;
  color: white;
  font-weight: bold;
  align-items: flex-end;
  background-color: #566d91;
}

.name {
  width: 200px;
}
.position {
  font-size: large;
}
.avatar {
  width: 104px;
  height: 150px;
}
.personal-info {
  display: flex;
  flex-wrap: wrap;
  width: 700px;
}
.info-item {
  width: 350px;
  padding: 6px;
  box-sizing: border-box;
}
.main{
  width: 836px;
}

.subtitle{
  width: 180px;
  color: white;
  background-color: #566d91;
}

.boxwrapper {
  display: flex; 
}
.schoolData{
  width: 270px;
}
.projectData{
  width: 300px;
}
.up-block{
  display: flex;
}


</style>
