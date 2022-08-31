<template>
  <div>
    <!-- views/FromView.vue 表单页面-->
    <el-form
      ref="form"
      :model="form"
      label-width="100px"
      style="width: 400px"
      :rules="rules"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input
          v-model="form.pwd"
          placeholder="请输入密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPwd">
        <el-input
          v-model="form.repwd"
          placeholder="请再次输入密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit('form')"> 立即注册 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
 <script>
export default {
  methods: {
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.form);
        } else {
          console.warn("请输入数据");
        }
      });
    },
  },
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.pwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        name: "",
        pwd: "",
        phone: "",
        repwd: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 10, message: "账号长度为3-10个字符", trigger: "blur" },
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattren: /^\d{6}$/,
            message: "必须为6位数字",
            trigger: "blur",
          },
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattren: /^1[3-9]\d{9}$/,
            message: "手机号格式不正确",
            trigger: "blur",
          },
        ],
        checkPwd: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
};
</script>