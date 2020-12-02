<template>
  <header>
    <nav>
      <router-link to="/Home">首页</router-link>
      <router-link to="/List">列表</router-link>
      <router-link to="/Shop">购物</router-link>
      <router-link to="/Detail">详情</router-link>
    </nav>
  </header>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
header {
  text-align: center;
  background: #333;
  margin-bottom: 10px;
  /* padding-left: 50px; */
}
a {
  font-size: 18px;
  line-height: 60px;
  padding: 0 40px;
  color: #a2a2a2;
  text-decoration: none;
}
a:hover {
  color: #fff;
}
</style>