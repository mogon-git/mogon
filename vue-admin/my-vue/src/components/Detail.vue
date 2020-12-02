<template>
  <div>
    <Head />
    <div class="detail_box">
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="旅游便签">
          <D1 />
        </el-tab-pane>
        <el-tab-pane label="地图">
          <h1>地图</h1>
          <D2 />
        </el-tab-pane>
        <el-tab-pane label="角色管理"
          >角色管理
          <D3 />
        </el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Head from './Head'
import D1 from './detail/D1'
import D2 from './detail/D2'
import D3 from './detail/D3'
import D4 from './detail/D4'
export default {
  components: { Head, D1, D2, D3, D4 },
  data () {
    return {
      tabPosition: 'left',
      list: 'right'
    };
  }
}
</script>

<style>
.detail_box {
  padding: 0 50px;
}
.el-menu {
  border: none;
  background: pink;
}
</style>
