<template>
  <div>
    <mt-field label="用户名" placeholder="请输入用户名" state="success">
    </mt-field>
    <mt-field
      label="密码"
      placeholder="请输入密码"
      type="password"
      state="warning"
      disableClear
    >
    </mt-field>
    <mt-field
      label="手机号"
      placeholder="请输入手机号"
      state="error"
      :attr="{ maxlength: '11' }"
    >
    </mt-field>
    <mt-button type="primary">注册</mt-button>
  </div>
</template>