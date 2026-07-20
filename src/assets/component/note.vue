<script setup>
  import notes from '../url-name.json'
  let note = notes['note']
</script>

<template>
  <el-container class="main-learn-root">
    <el-main class="main-learn-main">
      <el-row v-for="(items, indexes) in note" :key="indexes">
        <el-col :span="item" v-for="(item, index) in items['header']" :key="index">
          <h3>{{ index }}</h3>
        </el-col>
        <el-col :span="item['span']" v-for="(item, index) in items['content']" :key="index">
          <div class="link-card">
            <router-link :to="item['url']">{{ item['name'] }}</router-link>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-aside class="main-learn-aside"></el-aside>
  </el-container>
</template>

<style scoped>
.main-learn-root {
  height: 100%;
  width: 100%;
  padding: 0 20px;
}

h3 {
  font-weight: 700;
  padding-left: 12px;
  border-left: 3px solid var(--accent);
  margin: 15px 10px 8px;
  font-size: 1.1rem;
  color: #1e293b;
}

.link-card {
  margin: 8px 10px;
  padding: 12px 16px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: all 0.25s;
  border: 1px solid #f0f0f5;
}
.link-card:hover {
  box-shadow: 0 6px 16px rgba(0,0,0,0.08);
  border-color: var(--accent);
  transform: translateY(-2px);
}
.link-card a {
  color: #1e293b;
  text-decoration: none;
  font-weight: 500;
}
.link-card a:hover {
  color: var(--accent);
}
</style>