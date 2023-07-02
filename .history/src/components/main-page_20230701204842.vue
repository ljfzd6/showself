<template>
    <header>
        <div class="logo-nav">
        <p>流星个人定制博客</p>
        <nav>
            <a @click="mainpage()">首页</a>
            <a @click="showtemplate()">选择模板</a>
            <a @click="dialogVisible = true">赞助一下</a>
            <a>加入我们</a>
            <a @click="login()">{{ $store.state.id!=''?'进入'+$store.state.username+'的工作台':'登录' }}</a>
        </nav>
    </div>
    <router-view></router-view>
    <el-dialog title="赞助一下" :visible.sync="dialogVisible" :modal-append-to-body="false">
      <el-descriptions class="margin-top" title="赞助，求求，谢谢！" :column="3" :size="size" border>
            <template slot="extra">
            <el-button type="primary" size="small" @click="dialogFormVisible1= true">支付宝打款一百万！</el-button>
            <el-button type="primary" size="small" @click="dialogFormVisible2= true">微信赏你一毛QAQ </el-button>
            </template>
        </el-descriptions>

        <template>
            如果您喜欢我的作品，简单的捐赠是对我最大的物质和精神支持~谢谢您!
        </template>

        <!-- 修改密码弹窗 -->
        <el-dialog title="支付宝赏饭" :visible.sync="dialogFormVisible1" :modal-append-to-body="false">
            <img  style="width: 250px; " src="../assets/AliPay_F.jpg"   /> 
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible1= false">老板大气！</el-button>
            </div>
        </el-dialog>

        <!-- 修改密码弹窗 -->
        <el-dialog title="微信赏饭" :visible.sync="dialogFormVisible2" :modal-append-to-body="false">
            <img  style="width: 250px; " src="../assets/AliPay_F.jpg"   /> 
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible2= false">老板大气！</el-button>
            </div>
        </el-dialog>
    </el-dialog>
    </header>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      user: '',
      size: '',
    } 
  },
  computed: {
      getText(){
      return (this.$store.state.id)
    }
   },
  methods: {
    mainpage () { 
      this.$router.push('/home/hometext')
    },
    login () { 
      const id = this.getText;
      if (id != '') {
        this.$router.push('/workplace')
      } else {
        this.$router.push('/login')
       }
    },
    showtemplate() {
      this.$router.push('/home/showtemplate')
    }
  }

  }

</script>

<style lang="less" scoped>
*{
margin: 0;
font-family: fantasy'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

header {
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-position: center;
  filter: grayscale(0.3);
  height: 100%;
  padding: 0 1rem;
  animation: fadeIn 2s ease-in-out;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
p {
  font-size: 50px;
}

.logo-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  color: white;
}
nav a {
  padding: 5px 3rem;
  text-decoration: none;
  position: relative;
}
nav a.active{
  border: 5px solid rgb(71, 122, 58);
}
nav a:hover {
  text-decoration: underline;
  cursor: pointer;
}

.header-title{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 50px);
  color: #ffffff;
}
.header-title div{
  width: 50px;
  height: 30px;
  background-color: rgb(96, 134, 87);
}

</style>
