<template>
  <div class="Home">
    <Head />
    <h1>总览条目</h1>
    <ul>
      <li class="box" v-for="(item, index) of list" :key="index">
        <router-link :to="'/Sigle/' + item.id">
          <span class="tetle" v-changeColor
            >{{ item.id }}---{{ item.title }}</span
          >
        </router-link>
        <p>{{ item.body }}</p>
      </li>
    </ul>
    <el-button round @click="addData" class="btn-add">加载更多</el-button>
  </div>
</template>

<script>
import Head from './Head'
export default {
  components: { Head },
  name: 'Home',
  data () {
    return {
      list: [],
      n: 10
    }
  },
  created () {
    this.$axios.get('../../static/txt.json').then(res => {
      this.list = res.data.slice(0, 10);
      this.$store.commit('initList', res.data);
    })
  },
  methods: {
    addData () {
      if (this.n <= 90) {
        this.$axios.get('../../static/txt.json').then(res => {
          let data = res.data.slice(this.n, (this.n + 5));
          this.list = this.list.concat(data);
        }).catch(err => {
          this.$message({
            message: '没有更多内容了！',
            type: 'warning'
          });
        })
        this.n += 5
      } else {
        this.$message({
          message: '没有更多内容了！',
          type: 'warning'
        });
      }
    },
  }
}
</script>
<style scoped>
.Home {
  text-align: center;
}
.box {
  text-align: center;
  /* background: #e0e0e0; */
  margin-top: 10px;
  /* border: 1px solid; */
}
.box:hover {
  background-color: #e0e0e0;
  transition: all 0.5s ease;
}
h1 {
  text-align: center;
  line-height: 120px;
  /* background: skyblue; */
  /* color: #fff; */
  font-size: 36px;
  font-weight: normal;
}
.tetle {
  font-size: 24px;
  color: #ff6700;
  line-height: 40px;
}
p {
  line-height: 40px;
}
.btn-add {
  width: 200px;
  height: 80px;
  font-size: 25px;
  margin-top: 30px;
}
</style>