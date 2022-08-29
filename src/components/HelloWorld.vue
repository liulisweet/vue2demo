<template>
  <div class="hello-world">
    <h1>Hello World!</h1>
  </div>
</template>

<script>
// 生命周期属于常识性必会问题, 作为面试的基础题 几乎必考

// 常见面试题1: 从哪个周期开始能够操作DOM元素?
// mounted周期

// 问题2: 哪个周期适合发送网络请求?
// mounted周期
// 问: 那created 不行吗?
// 优点:提前微乎其微的时间, 但是一旦DOM元素创建失败了, 则白发了

// 问题3: 如果组件中制作了 定时器, 希望在组件销毁时清理掉?
// 答: 在销毁周期中关闭定时器

export default {
  data() {
    return {
      num: 1,
    };
  },
  // 选项 / 组件生命周期钩子函数
  // 生命周期: 从 生 到 死 之间经历的过程
  // 人的: 孕育->出生->成长->消亡
  // 组件: 创建(内存) -> 显示到页面(DOM) -> 更新自身 -> 销毁
  //
  // 钩子函数: 在固定的事件发生时,自动触发的函数
  beforeCreate() {
    // before:在...之前     create:创建
    // 我们要盖房子: 先准备物料- 水泥,沙子,砖头..
    console.log("beforeCreate: 开始创建组件数据");
  },
  created() {
    // 数据包括: data methods computed directives filters 等...
    console.log("created: 组件数据创建完毕");
  },
  beforeMount() {
    console.log("beforeMount: 开始制作DOM元素");
  },
  mounted() {
    // mounted: 挂载, 安装
    console.log("mounted: DOM元素挂载到页面上, 完成展示");
    // 相当于出生
  },
  beforeUpdate() {
    console.log("beforeUpdate: DOM元素准备更新");
    // num数据变化了, 但是还没更新到页面上
  },
  updated() {
    console.log("updated: DOM元素更新完毕");
    // num的新值 已经更新到页面上
  },

  beforeDestroy() {
    console.log("beforeDestroy: 准备销毁");
  },
  destroyed() {
    console.log("destroyed: 销毁完毕");
  },
};
</script>

<style lang="scss" scoped>
</style>