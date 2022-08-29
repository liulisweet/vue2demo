<template>
  <div class="one-com">
    <button @click="num++">num:{{ num }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 10,
    };
  },
};
</script>

<style lang="scss" scoped>
.one-com{
    padding: 10px;
    border-radius: 6px;
    background-color: #ccc;
}
</style>