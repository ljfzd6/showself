// 创建vuex中的stroe
import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'
// 使用vuex组件
Vue.use(Vuex)
// 准备actions--用于响应组件中的动作
const actions = {
  updateuser (context, value) {
    context.commit('UPDATEUSER', value)
  }
}
// 准备mutations--用于操作数据
const mutations = {
  UPDATEUSER (state, value) {
    state.id = value.id
    state.username=value.username
    console.log(state.id+state.username)
  }
}
// 准备state--用于存储数据
const state = {
  id: '',
  username: ''
}
// 创建store
export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  actions, mutations, state
})
