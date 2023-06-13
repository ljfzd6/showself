<template>
    <div>
        <el-descriptions class="margin-top" title="我的博客" :column="3" :size="size" border>
            <template slot="extra">
            <el-button type="primary" size="small" @click="updateuser()">修改基础用户信息</el-button>
            <el-button type="primary" size="small" @click=" dialogFormVisible= true">修改密码</el-button>
            </template>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-user"></i>
                用户名
            </template>
            {{user.username}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-user"></i>
                真实姓名
            </template>
            {{this.user.name}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-message"></i>
                邮箱
            </template>
            {{this.user.email}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-s-custom"></i>
                性别
            </template>
            {{this.user.sex}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-mobile"></i>
                电话
            </template>
            {{this.user.phone}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-coordinate"></i>
                等级
            </template>
            {{this.user.grade}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-time"></i>
                创建时间
            </template>
            {{this.user.createtime|formatDate('yyyy-MM-dd HH:mm:ss')}}
            </el-descriptions-item>
        </el-descriptions>
        <!-- 修改密码弹窗 -->
        <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="输入新密码" :label-width="formLabelWidth">
                <el-input v-model="newpassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" :label-width="formLabelWidth">
                <el-input v-model="rnewpassword" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="ok()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { SelectUserById, UpdatePassword } from '@/api/userApI.js'
export default {
  methods: {
    updateuser () { 
      this.$router.push({ name: 'updateuser', params: { user: this.user } })
    },
 // 获取表单信息
    async getinformation () {
      const { data: res } = await SelectUserById(this.$store.state.id)
      console.log(res.data)
      this.user = res.data
      if (this.user.sex == 1) {
        this.user.sex = '男'
      } else { 
        this.user.sex = '女'
      }
    },
    async ok () { 
      if (this.newpassword == this.rnewpassword) {
        console.log("this.password, this.userid"+this.password+ this.userid)
        const { data: res } = await UpdatePassword( this.user.id,this.newpassword);
      if (res.code == 200) {
        this.$notify({
          title: '成功',
          message: res.msg,
          type: 'success'
        });
        this.dialogFormVisible = false;
        this.getinformation();
        this.newpassword = '';
        this.rnewpassword = '';
      } else { 
        this.$notify.error({
          title: '错误',
          message: res.msg
        });
        this.dialogFormVisible= false
      }
      } else { 
        this.$notify.error({
          title: '错误',
          message: '两遍密码输入不一致'
        });
      }
    }
  },
  data () {
    return {
      dialogFormVisible: false,
      user: '',
      size: '',
      newpassword: '',
      rnewpassword:''
    }
  },

  // 获取展示数据
  created () {
    this.getinformation()
  },
  filters: {
    formatDate: function (value, args) {
      var dt = new Date(value);
        // yyyy-MM-dd HH:mm:ss
        let year = dt.getFullYear();
        let month = (dt.getMonth() + 1).toString().padStart(2, '0');
        let date = dt.getDate().toString().padStart(2, '0');
        let hour = dt.getHours().toString().padStart(2, '0');
        let minute = dt.getMinutes().toString().padStart(2, '0');
        let second = dt.getSeconds().toString().padStart(2, '0');
        return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    }
  }
}
</script>

<style>

</style>
