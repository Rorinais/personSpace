<script setup>
import personInfo from './assets/person.json'
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
        <div class="info-item birthday"><b>生日:</b> 2001.11</div>
        <div class="info-item telephone"><b>电话:</b>199 7756 2303</div>
        <div class="info-item education"><b>学历:</b>全日制本科</div>
        <div class="info-item email"><b>邮箱:</b>4138843928@qq.com</div>
      </div>
    </div>
    <div class="head-right">
      <img src="/avatar.png" class="avatar" />
    </div>
  </header>
  <body>
    <div class=""></div>
  </body>
  <main>简历详细内容</main>
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
</style>
