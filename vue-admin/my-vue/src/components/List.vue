<template>
  <div>
    <Head />
    <el-table :data="tableData" style="width: 100%;height:800px;">
      <el-table-column prop="id" label="#" width="180"> </el-table-column>
      <el-table-column prop="title" label="标题" width="380"> </el-table-column>
      <el-table-column prop="body" label="内容" width="1000"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="this.dataList.length"
      :page-size="this.pageSize"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import Head from './Head'
export default {
  components: { Head },
  data () {
    return {
      dataList: [],
      pageSize: 10,
      currentPage: 1,
    }
  },
  created () {
    this.dataList = this.$store.state.axiosList
  },
  methods: {
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val
    },
    handleDelete (index, row) {
      console.log(index, row);
      this.dataList.splice((this.currentPage - 1) * this.pageSize + index, 1)
    },
  },
  computed: {
    tableData () {
      return this.dataList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    }
  },
}
</script>

<style scoped>
.el-table {
  padding-left: 90px;
}
.el-pagination {
  margin-top: 15px;
  text-align: center;
}
</style>
