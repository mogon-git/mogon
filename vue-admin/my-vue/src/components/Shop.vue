<template>
  <div>
    <Head />
    <table class="table table-striped" style="text-align: center">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>作者</th>
        <th>数量</th>
        <th>单价</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item, index) of list" :key="index">
        <td>{{ index }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.author }}</td>
        <td>
          <button
            type="button"
            class="btn btn-success"
            style="width: 40px"
            @click="upplue(item, index), update()"
          >
            -
          </button>
          <span>{{ item.num }}</span>
          <button
            type="button"
            class="btn btn-success"
            style="width: 40px"
            @click="plus(item), update()"
          >
            +
          </button>
        </td>
        <td>{{ item.danjia }}</td>
        <td>{{ item.prices }}</td>
        <td>
          <button
            type="button"
            class="btn btn-success"
            @click="remove(index), update()"
          >
            删除
          </button>
        </td>
      </tr>
    </table>

    <h2 style="margin-left: 80%">总价￥{{ aggregate }}</h2>
    <h1>添加书籍</h1>
    <div class="form-group">
      <label for="exampleInputEmail1">书名</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        v-model="name"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">作者</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputPassword1"
        v-model="author"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">价格</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputPassword2"
        v-model="num"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">数量</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputPassword3"
        v-model="danjia"
      />
    </div>
    <button class=" btn btn-boss" @click="add(), update()">提交</button>
  </div>
</template>
<script>
import Head from './Head'
export default {
  components: { Head },
  data () {
    return {
      aggregate: 50,
      name: '',
      author: '',
      num: null,
      danjia: null,
      list: [{
        name: '深入浅出Vue.js',
        author: '孙悟空',
        num: 1,
        danjia: 50,
        prices: 50
      }]
    }
  },
  methods: {
    add () {
      if (this.name != '' && this.author != '' && this.num != null && this.danjia != null) {
        this.list.push({
          name: this.name,
          author: this.author,
          num: this.num,
          danjia: this.danjia,
          prices: this.danjia * this.num
        })
      } else if (this.name == '') {
        alert('书名不能为空！')
      } else if (this.author == '') {
        alert('作者不能为空！')
      } else if (this.danjia == null) {
        alert('数量不能为空！')
      } else if (this.num == null) {
        alert('单价不能为空！')
      }
      this.name = ''
      this.author = ''
      this.num = null
      this.danjia = null

    },
    plus (n, i) {
      n.num++;
      n.prices = n.num * n.danjia

    },
    upplue (n) {
      n.num--;
      if (n.num <= 0) {
        n.num = 0;
      }
      n.prices = n.num * n.danjia
    },
    remove (i) {
      this.list.splice(i, 1)
    },
    update () {
      let sum = this.list.reduce((next, cur) => {
        return cur.prices + next;
      }, 0);
      this.aggregate = sum
    }
  },
}
</script>

<style scoped>
.table-striped {
  width: 80%;
  margin: 0 auto;
}
h1 {
  text-align: center;
  margin-bottom: 70px;
}
label {
  /* margin-left: 30px; */
  font-weight: bold;
}
.form-group {
  margin: 0 auto;
  width: 80%;
}
.btn-boss {
  display: block;
  margin: 30px auto;
  width: 80%;
  background: skyblue;
}
.btn-style {
  background: red;
  border-color: red;
}
.form-group {
  margin-top: 20px;
}
</style>
