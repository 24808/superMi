//vuex的mutations//方法
export default {
  saveUserName(state, username) {
    state.username = username
  },
  saveCartCount(state, cartCount) {
    state.cartCount = cartCount
  }
}