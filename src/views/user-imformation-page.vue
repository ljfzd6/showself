  <template>
  <div>
    <el-descriptions class="margin-top" title="用户信息" :column="3" :size="size" border>
    <template slot="extra">
      <el-button type="primary" size="small" @click="null">修改基础用户信息</el-button>
      <el-button type="primary" size="small" @click="outerPassword = true">修改密码</el-button>
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
        <i class="el-icon-mobile-phone"></i>
        密码
      </template>
      {{this.user.password}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        真实姓名
      </template>
      {{this.user.name}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-phone"></i>
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
        <i class="el-icon-s-custom"></i>
        电话
      </template>
      {{this.user.phone}}
    </el-descriptions-item>
        <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-s-custom"></i>
        创建时间
      </template>
      {{this.user.createtime|formatDate('yyyy-MM-dd HH:mm:ss')}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-s-custom"></i>
        等级
      </template>
      {{this.user.grade}}
    </el-descriptions-item>
    <!-- 修改密码弹窗 -->
  </el-descriptions>
      <el-dialog title="修改密码" :visible.sync="outerPassword">
    <span>修改密码需要输入邮箱验证码</span>
    <el-dialog
      width="30%"
      title="输入验证码"
      :visible.sync="innerPassword"
      append-to-body>
       输入验证码：<el-input type="text" v-model="verifcode"></el-input>
       <hr>
       输入新密码：<el-input type="text" v-model="newpassword"></el-input>
      <el-button type="primary" @click="null">确定</el-button>
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outerPassword = false">取 消</el-button>
      <el-button type="primary" @click="null">发送验证码</el-button>
    </div>
  </el-dialog>
  <!-- 生成个人信息二维码弹窗 -->
  <el-dialog
  :visible.sync="dialogVisible"
  width="30%">
  <img v-bind:src="this.persondatacard">
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import { SelectUserById } from '@/api/userApI.js'
export default {
  methods: {
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
  },
  data () {
    return {
      user: '',
      size: '',
      outerPassword: false,
      innerPassword: false,
      dialogVisible: false,
      verifcode: '',
      newpassword: ''
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
