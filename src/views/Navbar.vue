<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">推荐</mt-tab-item>
      <mt-tab-item id="2">军事</mt-tab-item>
      <mt-tab-item id="3">科技</mt-tab-item>
      <mt-tab-item id="4">数码</mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1",
    };
  },
};
</script>