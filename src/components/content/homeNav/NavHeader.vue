<template>
  <div class="header">
    <nav-headertop1></nav-headertop1>
    <nav-headertop2></nav-headertop2>
  </div>
</template>
<script>
import NavHeadertop1 from "./NavHeaderchild/NavHeader-top1";
import NavHeadertop2 from "./NavHeaderchild/NavHeader-top2";
export default {
  name: "NavHeader",
  components: {
    NavHeadertop1,
    NavHeadertop2,
  },
};
</script>
<style  lang="scss" scoped>
.header {
}
</style>
