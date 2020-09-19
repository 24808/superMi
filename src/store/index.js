import Vue from "vue"
import Vuex from "vuex"
import  mutations from "./mutations"
import  getters from "./getters"
import  actions from "./actions"

Vue.use(Vuex);
const state={
  username:'',//登录用户名
  cartCount:8//购物车商城数量
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})