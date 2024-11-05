<script setup>
  import projects from '../url-name.json'
  let project=projects["projects"]
  console.log(project)
</script>
<style src="../css/projects.css" scoped/>

<template>
  <el-container class='main-projects-root'>
    <el-main class="main-projects-main">
      <el-row v-for="(items,indexes) in project" :key="indexes">
        <el-col :span="item" v-for="(item,index) in items['header']" :key="index"><h3>{{index}}</h3></el-col>
        <el-col :span="item['span']" v-for="(item,index) in items['content']" :key="index">
          <div><router-link :to="item['url']">{{item['name']}}</router-link></div>
        </el-col>
      </el-row>
    </el-main>

    <el-aside class="main-projects-aside">

    </el-aside>
  </el-container>
</template>
