<template>
  <div>
    <!-- views/TableView.vue 表格页面-->
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      height="calc(100vh - 60px - 40px)"
    >
      <el-table-column prop="id" label="id" width="100" align="center">
      </el-table-column>
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column label="年龄" align="center">
        <template slot-scope="scope"> {{ scope.row.age }}岁 </template>
      </el-table-column>
      <el-table-column label="婚姻状态" align="center">
        <template slot-scope="scope">
          {{ scope.row.married ? "已婚" : "未婚" }}
        </template>
      </el-table-column>
      <el-table-column prop="gender" label="性别" align="center">
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            circle
            @click="handleEdit(scope.$index, scope.row)"
          >
          </el-button>
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            circle
            @click="handleDelete(scope.$index, scope.row)"
          >
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        { id: "T1", name: "亮亮", age: 38, married: true, gender: "男" },
        { id: "T2", name: "泡泡", age: 18, married: false, gender: "女" },
        { id: "T3", name: "楠楠", age: 28, married: false, gender: "女" },
        { id: "T4", name: "小新", age: 48, married: false, gender: "男" },
        { id: "T5", name: "文华总", age: 28, married: true, gender: "男" },
        { id: "T1", name: "亮亮", age: 38, married: true, gender: "男" },
        { id: "T1", name: "亮亮", age: 38, married: true, gender: "男" },
        { id: "T1", name: "亮亮", age: 38, married: true, gender: "男" },
        { id: "T1", name: "亮亮", age: 38, married: true, gender: "男" },
        { id: "T1", name: "亮亮", age: 38, married: true, gender: "男" },
        { id: "T1", name: "亮亮", age: 38, married: true, gender: "男" },
        { id: "T2", name: "泡泡", age: 18, married: false, gender: "女" },
        { id: "T3", name: "楠楠", age: 28, married: false, gender: "女" },
        { id: "T4", name: "小新", age: 48, married: false, gender: "男" },
        { id: "T5", name: "文华总", age: 28, married: true, gender: "男" },
        { id: "T1", name: "亮亮", age: 38, married: true, gender: "男" },
        { id: "T1", name: "亮亮", age: 38, married: true, gender: "男" },
        { id: "T1", name: "亮亮", age: 38, married: true, gender: "男" },
        { id: "T1", name: "亮亮", age: 38, married: true, gender: "男" },
        { id: "T1", name: "亮亮", age: 38, married: true, gender: "男" },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>