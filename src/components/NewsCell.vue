<template>
  <div class="news-cell">
    <span>
      <slot />
    </span>
    <span>
      <slot name="time" />
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.news-cell {
  display: flex;
  padding: 10px;
  border-bottom: 1px dashed gray;
  justify-content: space-between;
}
</style>