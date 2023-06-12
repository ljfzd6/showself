import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/components/main-page.vue'
import HomeText from '@/views/hometext-page.vue'
import LoginAndRegister from '@/components/loginregister-page.vue'
import WorkMain from '@/components/workplace-page.vue'
import ShowTemplate from '@/views/showtemplate-page.vue'
import UserImformation from '@/views/user-imformation-page.vue'
import ForgetPassword from '@/components/forgetpassword-page.vue'
import UpdateUser from '@/views/user-update-page.vue'

//导入插件
Vue.use(VueRouter)
// 新增以下代码，解决NavigationDuplicated问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

const router = new VueRouter({
  // mode: 'hash',
  routes: [
    // 重定向首页
    { path: '/', redirect: '/home' },
    // 配置路由
    { path: '/login', component: LoginAndRegister },
    { path: '/forgetpassword', component: ForgetPassword, name: 'forgetpassword'},
    { path: '/workplace',
      component: WorkMain,
      redirect: '/workplace/userinformation',
      children: [
        { path: 'userinformation', component: UserImformation },
        { path: 'updateuser',component: UpdateUser,name: "updateuser"}
      ] },
    {
      path: '/home',
      component: MainPage,
      redirect: '/home/hometext',
      children: [
        { path: 'hometext', component: HomeText },
        { path: 'showtemplate', component: ShowTemplate }
      ],
    },
  ],
})
export default router
