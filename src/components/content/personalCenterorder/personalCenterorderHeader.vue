<template>
  <div class="personal-header">
       <h1>
           {{title}}
           <small>{{small}}</small>
       </h1>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "personalCenterorderHeader",
  props: {
    title: String,
    small: '',
  },
  
};
</script>
<style scoped lang="scss">
.personal-header{
    h1{
            margin: 0;
    font-size: 30px;
    font-weight: 400;
    line-height: 68px;
    color: #757575;
    small{
            margin-left: 10px;
    font-size: 12px;
    line-height: 1.5;
    }
    }
}
</style>
