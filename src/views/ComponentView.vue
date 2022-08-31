<template>
  <div>
    <!-- views/ComponentView.vue 布局页面-->
    <el-container>
      <el-header style="background-color: #252526">
        <img width="60px" height="60px" src="../assets/logo2.png" alt="" />
        <el-menu
          active-text-color="#fff"
          background-color="#252526"
          mode="horizontal"
          default-active="1"
          style="display: inline-block"
        >
          <el-menu-item index="1">指南</el-menu-item>
          <el-menu-item index="2">组件</el-menu-item>
          <el-menu-item index="3">主题</el-menu-item>
          <el-menu-item index="4">资源</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside
          width="65px"
          style="background-color: #252526; height: calc(100vh - 60px)"
        >
          <el-menu
            active-text-color="#fff"
            background-color="#252526"
            mode="vertical"
            :default-active="$route.path"
            class="menu"
            router
          >
            <el-menu-item index="/component/container">
              <i class="el-icon-menu"></i>
              <!-- <span slot="title">container 组件</span> -->
            </el-menu-item>
            <el-menu-item index="/component/table">
              <i class="el-icon-document"></i>
              <!-- <span slot="title">table 表格</span> -->
            </el-menu-item>
            <el-menu-item index="/component/form">
              <i class="el-icon-setting"></i>
              <!-- <span slot="title">form 表单</span> -->
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main style="height: calc(100vh - 60px)">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.menu {
  border-right: none;
}
.el-button {
  background-color: "#1A2B60";
}
</style>