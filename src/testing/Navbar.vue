<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        <img src="../assets/img/001.png" alt="" slot="icon" />推荐
      </mt-tab-item>
      <mt-tab-item id="2">
        <img src="../assets/img/004.png" alt="" slot="icon" />军事
      </mt-tab-item>
      <mt-tab-item id="3">
        <img src="../assets/img/007.png" alt="" slot="icon" />科技
      </mt-tab-item>
      <mt-tab-item id="4">
        <img src="../assets/img/025.png" alt="" slot="icon" />数码
      </mt-tab-item>
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