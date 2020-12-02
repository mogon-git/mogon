<template>
  <div class="login">
    <div class="login2">
      <p>请先登录</p>
      <el-input placeholder="请输入用户名" v-model="user" clearable></el-input>
      <el-input
        placeholder="请输入密码"
        v-model="pass"
        show-password
      ></el-input>
      <el-button plain @click="sub">登 录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: '',
      pass: '',
    }
  },
  methods: {
    sub () {
      this.$axios.post('/api', {
        user: this.user,
        pass: this.pass
      }).then(res => {
        if (res.data === 1) {
          this.$router.push('./Home')
        } else {
          this.$message.error({
            message: '用户名或密码错误',
            type: 'warning'
          });
        }
      }).catch(() => {
        this.$message.error({
          message: '服务器飞走啦！',
          type: 'warning'
        })
      })
    }
  }
}
</script>

<style>
.login2 {
  height: 400px;
  width: 400px;
  margin: 300px auto;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 0 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
}
.el-input {
  margin: 15px 0;
}
p {
  font-size: 30px;
  line-height: 100px;
}
.el-button {
  width: 200px;
  margin-top: 40px;
}
</style>