<template>
  <div class="header">
    <nav-headertop1
      :username="username"
      :cartCount="cartCount"
    ></nav-headertop1>
    <nav-headertop2 :phoneList="phoneList"></nav-headertop2>
  </div>
</template>
<script>
import NavHeadertop1 from "./NavHeaderchild/NavHeader-top1";
import NavHeadertop2 from "./NavHeaderchild/NavHeader-top2";
import { HomeTopList } from "./../../../network/home";
//解构
import { mapState } from "vuex";
export default {
  name: "NavHeader",
  data() {
    return {
      phoneList: [],
    };
  },
  computed: {
    //解构使用
    ...mapState(["username", "cartCount"]),
    //一般使用
    // username(){
    //   return this.$store.state.username;
    // },
    // cartCount(){
    //   return this.$store.state.cartCount;
    // }
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    getProductList() {
      HomeTopList().then((res) => {
        // console.log(res);
        this.phoneList=res
        //判断返回的数据是否大于6
        // if (res.list.length > 6) {
        //   //数组的截取
        //   this.phoneList = res.list.slice(0, 6);
        // } else {
        //   this.phoneList = res.list;
        // }
      });
    },
  },
  components: {
    NavHeadertop1,
    NavHeadertop2,
  },
};
</script>
<style lang="scss" scoped>
.header {
}
</style>
