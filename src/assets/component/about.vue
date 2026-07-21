<script setup>
import about from '../url-name.json'
import ArticleSidebar from './article-sidebar.vue'
let content = about['about']
</script>

<template>
  <div class="page-layout">
  <div class="page-main">
  <div class="main-about-root">
      <div class="main-about-main-root">
        <blockquote>
          <p>可以喜欢一个人，一件事或物很长一段时间，
            如果某一天真的不喜欢了，可能真的已经失望透顶了，真的感觉到累了。
            对于喜欢，我觉得不仅仅是说说而已，更应该全身心投入。</p>
          <p style="text-align: right">2023-09-18</p>
        </blockquote>
        <section v-for="(items, indexes) in content[0]" :key="indexes">
          <h3>{{ items['header'] }}</h3>
          <p v-for="(item, index) in items['content']" :key="index">{{ item }}</p>
        </section>
        <section>
          <el-row align="middle">
            <el-col :span="items['span']" v-for="(items, indexes) in content[1]" :key="indexes">
              <a :href="items['url']" target="_blank">
                <img :src="items['image']" alt="" />{{ items['name'] }}
              </a>
            </el-col>
          </el-row>
        </section>
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

.main-about-root { padding-bottom: 40px; }

blockquote {
  margin: 0 0 32px;
  padding: 24px 28px;
  background: var(--bg-secondary);
  border-left: 4px solid var(--accent);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  box-shadow: var(--shadow-sm);
  font-style: italic;
  color: var(--text-body);
  position: relative;
  line-height: 1.8;
}
blockquote::before {
  content: '"';
  position: absolute;
  top: -12px;
  left: 14px;
  font-size: 3rem;
  color: var(--accent);
  opacity: 0.25;
  font-family: Georgia, 'Noto Serif SC', serif;
}

section {
  margin-bottom: 28px;
}
section h3 {
  font-weight: 700;
  margin: 0 0 14px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--border-color);
  display: inline-block;
  color: var(--text-heading);
  font-size: 1.15rem;
}
section p {
  color: var(--text-body);
  line-height: 1.8;
  margin-bottom: 8px;
}

section a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: var(--bg-tertiary);
  color: var(--accent);
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  margin: 4px;
  transition: 0.2s;
  font-size: 0.9rem;
}
section a:hover {
  background: var(--accent);
  color: #fff;
}
section img {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  object-fit: cover;
}

@media screen and (max-width: 900px) {
  .page-side { display: none; }
  .page-layout { padding: 20px 14px; }
}
@media screen and (max-width: 800px) {
  .main-about-root {
    padding: 20px 14px 60px;
  }
  blockquote {
    padding: 16px 20px;
  }
}
</style>