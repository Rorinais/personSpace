<!-- /home/rorinais/Desktop/vue-project/src/assets/component/aside.vue -->
<script setup>
  import asides from '../url-name.json'
  let aside = asides['aside']
</script>

<template>
  <div class="aside-root">
    <div class="aside-container">
      <div class="aside-avatar"></div>
      <div class="aside-name">
        <h1>
          <router-link to="/">RORINAIS</router-link>
        </h1>
        <p>洛璃奈希个人空间</p>
      </div>
      <nav class="aside-catalogue">
        <ul class="catalogue-list">
          <li v-for="(value, keys) in aside" :key="keys">
            <router-link :to="value"> {{ keys }} </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.aside-root {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e5e7eb;
}

.aside-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.aside-avatar {
  border: 3px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  margin: 20px auto;
  background-image: url('/images/avatar.jpg');  /* 改为根路径 */
  background-position: center center;
  background-size: cover;
  box-sizing: border-box;
  height: 160px;
  width: 160px;
  box-shadow: 0 0 30px rgba(99,102,241,0.3), 0 8px 20px rgba(0,0,0,0.4);
  transition: transform 0.3s, box-shadow 0.3s;
}
.aside-avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 0 50px rgba(99,102,241,0.5), 0 12px 28px rgba(0,0,0,0.5);
}

.aside-name {
  padding: 12px 20px;
  text-align: center;
}
.aside-name h1 a {
  font-size: 1.6rem;
  font-weight: bold;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.aside-name p {
  color: #9ca3af;
  text-align: center;
  margin-top: 4px;
}

.aside-catalogue {
  width: 100%;
  margin-top: 16px;
}
.catalogue-list li {
  line-height: 48px;
  font-size: 1rem;
}
.catalogue-list li a {
  display: block;
  padding: 0 24px;
  border-radius: 0 20px 20px 0;
  color: #cbd5e1;
  transition: all 0.3s;
  font-weight: 500;
}
.catalogue-list li a:hover {
  background: rgba(255,255,255,0.05);
  color: #fff;
  text-decoration: none;
}
.catalogue-list li a.router-link-active {
  background: rgba(99,102,241,0.15);
  color: #fff;
  font-weight: 600;
  box-shadow: inset 3px 0 0 var(--sidebar-accent);
}

@media screen and (max-width: 800px) {
  .aside-root {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 12px;
  }
  .aside-avatar {
    height: 50px;
    width: 50px;
    margin: 0 16px 0 0;
  }
  .aside-name {
    padding: 0;
    flex: 1;
  }
  .aside-name h1 a {
    font-size: 1.2rem;
  }
  .aside-name p {
    font-size: 0.8rem;
  }
  .aside-catalogue {
    width: 100%;
    margin-top: 8px;
  }
  .catalogue-list {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
  }
  .catalogue-list li {
    width: 25%;
    line-height: 36px;
    font-size: 0.9rem;
  }
}
</style>