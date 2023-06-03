<template>
<div >
  <el-container class="pagestyle">
  <el-header >
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  >
  <el-menu-item index="1">流星个人博客</el-menu-item>
  <el-submenu index="2">
    <template slot="title">{{  }}</template>
    <el-menu-item index="2-1" @click="null">个人信息</el-menu-item>
    <el-menu-item index="2-3" @click="null">注销登录</el-menu-item>
  </el-submenu>
</el-menu>
  </el-header>
  <el-container>
    <el-aside style="height: 680px;"  width="200px"  class="mainpage">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="null">个人信息</el-menu-item>
          <el-menu-item index="1-2" @click="null">回到首页</el-menu-item>
          <el-menu-item index="1-3" @click="null">注销</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
         <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">博客功能</span>
         </template>
           <el-menu-item-group>
          <template slot="title">主要功能</template>
          <el-menu-item index="2-1" @click="null">我的博客</el-menu-item>
          <el-menu-item index="2-2" @click="null">创建博客</el-menu-item>
          <el-menu-item index="2-3" @click="null">赞助一下</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-submenu index="3">
         <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">开发者功能</span>
         </template>
           <el-menu-item-group>
          <el-menu-item index="2-1" @click="null">上传模板</el-menu-item>
          <el-menu-item index="2-2" @click="null">我的模板</el-menu-item>
          <el-menu-item index="2-3" @click="null">注销</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
    </el-aside>
    <el-main style="height: 100%;">
      <router-view></router-view>
      </el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.pagestyle {
  padding-left: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  height: 680px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
   &.el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: px;
    padding: 0 0px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height:540px;
    flex-grow:1;
  }

  body > .el-container {
    margin-bottom: 40px;
    height: 100%;
  }
  .mainpage{
    height: 540px;
    padding-bottom: 0px;
    background-color: rgb(84, 92, 100);
  }

</style>
