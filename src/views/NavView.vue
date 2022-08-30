<template>
  <div>
    <el-menu
      mode="horizontal"
      :default-active="activeIndex"
      active-text-color="#FEBECA"
    >
      <el-menu-item index="1">指南</el-menu-item>
      <el-submenu index="2">
        <template slot="title">组件</template>
        <el-menu-item index="2-1">表单</el-menu-item>
        <el-menu-item index="2-2">按钮</el-menu-item>
        <el-menu-item index="2-3">选项卡</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">主题</el-menu-item>
      <el-menu-item index="4">资源</el-menu-item>
    </el-menu>
    <!-- 垂直导航 -->
    <el-menu
      class="menu"
      mode="vertical"
      :default-active="activeIndex"
      active-text-color="#FEBECA"
    >
      <el-menu-item index="1">指南</el-menu-item>
      <el-submenu index="2">
        <template slot="title">组件</template>
        <el-menu-item index="2-1">表单</el-menu-item>
        <el-menu-item index="2-2">按钮</el-menu-item>
        <el-menu-item index="2-3">选项卡</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">主题</el-menu-item>
      <el-menu-item index="4">资源</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
};
</script>
<style lang="scss">
.menu {
  width: 200px;
}
.el-menu {
  border-right: 0;
}
</style>