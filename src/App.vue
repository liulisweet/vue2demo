<template>
  <div>
    <div id="nav">
      <button @click="goHome">首页</button>
      <button @click="$router.push('/0001')">0001</button>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      console.log(this);
      console.log(this.$route);
      if (this.$route.path == "/") return;
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>