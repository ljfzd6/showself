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
            <button type="submit" class="btn" @click.prevent="reset()">重置密码</button>
        </form>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>{{ msg }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="ok()">确 定</el-button>
      </span>
    </el-dialog>
  </body>
</template>

<script>
import { UpdatePassword}  from '@/api/userApI.js'
export default {
  data() {
    return {
      upassword: '',
      password: '',
      userid: '',
      msg: '',
      dialogVisible: false,
      type: "sucess"
    }
  },
  methods: {
    async reset () { 
      if (this.password == this.upassword) {
        console.log("this.password, this.userid"+this.password+ this.userid)
        const { data: res } = await UpdatePassword( this.userid,this.password);
      if (res.code == 200) {
        this.msg = res.msg;
        this.dialogVisible = true
        this.type = 'sucess';
      } else { 
        this.msg = res.msg;
        this.dialogVisible = true
        this.type='common'
      }
      } else { 
        this.msg = "输入是两遍代码不一样";
        this.dialogVisible = true
        this.type='common'
      }
      

    },
    ok () { 
      if (this.type == 'sucess') {
        this.dialogVisible = false;
        this.$router.push('/login')
      } else { 
        this.dialogVisible = false;
      }
    }
  },
    // 读取数据展示页面传来的值
    created () {
    this.userid = this.$route.params.userid
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