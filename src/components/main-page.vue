<template>
    <header>
        <div class="logo-nav">
        <p>流星个人定制博客</p>
        <nav>
            <a @click="mainpage()">首页</a>
            <a @click="showtemplate()">选择模板</a>
            <a>使用说明</a>
            <a @click="login()">{{ $store.state.id!=''?'进入'+$store.state.username+'的工作台':'登录' }}</a>
        </nav>
    </div>
    <router-view></router-view>
    </header>
</template>

<script>
export default {
  data () {
    return {
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
