<template>
  <body >
    <div class="container">
        <h1 style="">找回密码</h1>
        <form id="reset-form">
            <div class="form-group">
                <label for="new-password">输入新密码：</label>
                <input type="password" id="new-password" v-model="password" required>
            </div>
            <div class="form-group">
                <label for="confirm-password">确认新密码：</label>
                <input type="password" id="confirm-password" v-model="upassword" required>
            </div>
            <button type="submit" class="btn">重置密码</button>
        </form>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      upassword: '',
      id: ''
    }
  },
  methods: {
    sendVerificationCode() {
      // 发送验证码的逻辑
      this.isSending = true;
      // 发送成功后将isSending设置为false
    },
    submitForm() {
      // 提交表单的逻辑
      this.isSubmitting = true;
      // 提交成功后将isSubmitting设置为false
    }
  }
}
</script>

<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

body {
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-position: center;
    font-family: Arial, sans-serif;
    
}

.container {
    color: white;
    max-width: 600px;
    margin: 0 auto;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h1 {
    text-align: center;
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.btn {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 50px;
}

.btn:hover {
    background-color: #0069d9;
}
</style>