<template>
  <div>
    <el-container>
      <el-header>
        <el-menu mode="horizontal" :default-active="activeIndex">
          <el-menu-item index="1">指南</el-menu-item>
          <el-menu-item index="2">组件</el-menu-item>
          <el-menu-item index="3">主题</el-menu-item>
          <el-menu-item index="4">资源</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="240px">
          <el-row>
            <el-button
              round
              icon="el-icon-s-order"
              @click="collapse = !collapse"
              v-if="collapse"
            ></el-button>
            <el-button
              round
              icon="el-icon-refresh-left"
              @click="collapse = !collapse"
              v-if="!collapse"
            ></el-button>
          </el-row>
          <el-menu
            mode="vertical"
            :default-active="activeIndex"
            @open="handleOpen"
            @close="handleClose"
            :collapse="collapse"
            class="menu"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">container 组件</span>
            </el-menu-item>
            <el-menu-item index="2"
              ><i class="el-icon-document"></i>
              <span slot="title">table 表格</span>
            </el-menu-item>
            <el-menu-item index="3"
              ><i class="el-icon-setting"></i>
              <span slot="title">form 表单</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main> </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      collapse: true,
    };
  },
};
</script>
<style lang="scss">
.menu {
  border-right: none;
}
</style>