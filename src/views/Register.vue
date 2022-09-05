<template>
  <div>
    <mt-header title="学前端,到学问"
      ><router-link to="/home/index" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/login" slot="right">登录</router-link>
    </mt-header>
    <mt-field
      label="用户名"
      placeholder="请输入用户名"
      @blur.native.capture="checkName"
      disableClear
      v-model="name"
      :state="nameState"
    >
    </mt-field>
    <mt-field
      label="密码"
      placeholder="请输入密码"
      type="password"
      @blur.native.capture="checkPwd"
      disableClear
      v-model="pwd"
      :state="pwdState"
    >
    </mt-field>
    <mt-field
      label="验证密码"
      placeholder="请再次输入密码"
      type="password"
      @blur.native.capture="checkRepwd"
      disableClear
      v-model="repwd"
      :state="repwdState"
    >
    </mt-field>
    <mt-button type="primary" size="large" @click.native="checkForm"
      >立即注册</mt-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      nameState: "",
      pwd: "",
      pwdState: "",
      repwd: "",
      repwdState: "",
      check: true,
    };
  },
  methods: {
    //验证账号输入框的值是否符合要求
    checkName() {
      var pattern = /^\w{3,15}$/;
      if (pattern.test(this.name)) {
        this.nameState = "success";
      } else {
        this.nameState = "error";
        this.check = false;
      }
    },
    checkPwd() {
      var pattern = /^\d{6}/;
      if (pattern.test(this.pwd)) {
        this.pwdState = "success";
      } else {
        this.pwdState = "error";
        this.check = false;
      }
    },
    checkRepwd() {
      var pattern = /^\d{6}/;
      if (pattern.test(this.repwd) && this.pwd == this.repwd) {
        this.repwdState = "success";
      } else {
        this.repwdState = "error";
        this.check = false;
      }
    },
    checkForm() {
      this.checkName();
      this.checkPwd();
      this.checkRepwd();
      if (this.check) {
        console.log("发送表单");
      } else {
        console.log("不匹配");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>