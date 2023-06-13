<template>
<el-form :model="UserForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" >
    <el-input type="text"  v-model="UserForm.username" ></el-input>
  </el-form-item>
  <el-form-item label="真实姓名" >
    <el-input type="text" v-model="UserForm.name" ></el-input>
  </el-form-item>
  <el-form-item label="邮箱" >
    <el-input type="email" v-model.number="UserForm.email"></el-input>
  </el-form-item>
    <el-form-item label="性别" >
      <div class="radioshow">
    <input type="radio" id="male" value="0" v-model="sex">
    <label for="male">男</label>
    <input type="radio" id="female" value="1" v-model="sex">
    <label for="female">女</label>
  </div>
  </el-form-item>
    <el-form-item label="电话" >
    <el-input type="phone" v-model="UserForm.phone"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm()">提交</el-button>
    <el-button @click="resetForm()">重置</el-button>
  </el-form-item>
  <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>{{ msg }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="ok()">确 定</el-button>
      </span>
    </el-dialog>
</el-form>

</template>

<script>
// import { UpdateUserInformation } from '@/api/userApI.js'
export default {
  data () {
    return {
      UserForm: '',
      dialogVisible: false,
      msg: ''
    }
  },
  methods: {
    // // 提交修改表单，弹出提示框
    // async submitForm () {
    //   const { data: res } = await UpdateUserInformation(this.UserForm)
    //   this.dialogVisible = true
    //   this.error = res.data
    // },
    // 跳转至浏览信息页面，并且关闭提示框
    confirmupdate () {
      console.log(this.flag)
      if (this.flag === 200) {
        this.dialogVisible = false
        this.$router.push('/home/user')
      } else {
        this.dialogVisible = false
      }
    },
    // 重置数据
    resetForm () {
      this.UserForm = ''
    }
  },
  // 读取数据展示页面传来的值
  created () {
    this.UserForm = this.$route.params.user
  }
}
</script>

<style lang="less" scoped>
  .radioshow {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
  input[type="radio"] {
    margin: 0 10px;
  }
  label {
    margin: 0 5px;
  }
</style>
