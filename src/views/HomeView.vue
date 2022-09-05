<template>
  <div>
    <!-- 动态渲染 -->
    <router-view />
    <div style="height: 60px"></div>

    <!-- 底部选项卡 -->
    <mt-tabbar fixed v-model="tabSelected">
      <mt-tab-item id="index">
        首页
        <img
          :src="require(`@/assets/index_${tabSelected == 'index' ? 1 : 0}.png`)"
          slot="icon"
        />
      </mt-tab-item>
      <mt-tab-item id="me">
        我的
        <img
          :src="require(`@/assets/me_${tabSelected == 'me' ? 1 : 0}.png`)"
          slot="icon"
        />
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  activated() {
    // 回到当前页时，修改tabSelected默认选中项
    this.tabSelected = this.$route.path.split("/")[2];
  },
  watch: {
    tabSelected(to, from) {
      console.log(`切换了底部选项卡，从 ${from} 跳转到 ${to} `);
      if (to == this.$route.path.split("/")[2]) {
        return; // 防止路由重复跳转错误
      }
      if (to == "me") {
        this.$router.push(`/home/me`);
      } else if (to == "index") {
        this.$router.push(`/home/index`);
      }
    },
  },
  data() {
    return {
      tabSelected: this.$route.path.split("/")[2],
    };
  },
};
</script>
<style lang="scss" scoped>
</style>