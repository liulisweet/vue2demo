<template>
  <div>
    <mt-swipe :auto="4000" style="height: 56vw">
      <mt-swipe-item>
        <img src="/banner/1.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/banner/2.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/banner/3.jpg" alt="" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<style scoped>
.mint-swipe-item img {
  width: 100%;
}
</style>