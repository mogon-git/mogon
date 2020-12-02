<template>
  <div class="box">
    <h1>页面详情</h1>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><img src="../assets/banner1.jpg" alt=""/></swiper-slide>
      <swiper-slide><img src="../assets/banner2.jpg" alt=""/></swiper-slide>
      <swiper-slide><img src="../assets/banner3.jpg" alt=""/></swiper-slide>
      <swiper-slide><img src="../assets/banner4.jpg" alt=""/></swiper-slide>

      <!-- Optional controls -->
      <div class="pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <h2>{{ mgs.id }}---{{ mgs.title }}</h2>
    <p>{{ mgs.body }}</p>
    <router-link to="/Home">
      <el-button round class="upBtn">Home</el-button>
    </router-link>
  </div>
</template>

<script>

export default {

  data () {
    return {
      swiperOption: {
        autoplay: 2000,//可选选项，自动滑动
        loop: true,//可选选项，开启循环
        pagination: '.pagination',
        paginationClickable: true,
      },
      mgs: {},
      id: this.$route.params.id
    }
  },

  created () {
    this.$axios.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(res => {
      this.mgs = res.data
    })
  },
}
</script>

<style>
.box {
  text-align: center;
}
h2 {
  line-height: 80px;
}
h1 {
  line-height: 120px;
  font-size: 50px;
  font-weight: normal;
}
.upBtn {
  width: 200px;
  height: 80px;
  font-size: 30px;
  margin-top: 30px;
}
</style>