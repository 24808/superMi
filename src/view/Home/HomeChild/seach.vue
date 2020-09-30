<template>
  <div class="seach" ref="seach" >
    <div class="container">
    
      <div class="seach-result">
          <a href="javascript:;">全部结果</a>
        <span>></span>
        <a href="javascript:;">全部结果</a>
        <span>></span>
        <a href="javascript:;">{{'小米是'}}</a>
        <span>></span>
      </div>
    </div>
    <div class="classification">
          <div class="container">
              <div class="seach-classification">
              <span>分类:</span>
              <li>全部</li>
            <li v-for="(item,index) in classification" :key="index">{{item}}</li>
            </div>
            <div class="order">
                <ul>
                    <li v-for="(item,index) in orderlist" :key="index">
                        {{item}}
                    </li>
                </ul>
                <ul>
                    <li>
                        收货地>
                        <div class="adrss">北京 北京市</div>
                        
                    </li>
                    <li>
                        <span class="checkbox"></span>
                        >
                         出校
                        </li>
                    <li>
                        <span class="checkbox"></span>
                        >分期</li>
                    <li>
                        <span class="checkbox"></span>>仅看诱惑</li>
                </ul>
            </div>
          </div>
          </div>
    </div>
</template>

<script>
export default {
  name: "seach",
  props: {
    title: String,
  },
  data() {
    return {
    classification:['手机1','手机2','手机3','手机4',],
    orderlist:['综合','新品','新品','新品']
    };

  }
};
</script>

<style lang="scss" scoped>
.seach{
    font-size: 12px;
    line-height: 40px;
    background: #f5f5f5;
    color: #757575;
}
.seach-result{
    a{
        color:#333
    }
}
.classification{
    background-color: #eee;

.seach-classification{
    display: flex;
    span,li{
            display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #424242;
    font-size: 14px;
    width: 148px;
    padding: 14px 0;
    height: 20px;
    line-height: 20px;
    }
    span{
            color: #b0b0b0;
    }
}
.order{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color:#424242;
        font-size: 15px;
    ul{
          height: 30px;
    line-height: 30px;
        display: flex;
         &:last-child{
             margin-left: 30px;
             span{
               display: inline-block;
               width: 18px;
               height: 18px;
               margin-left: 8px;
               border: 1px solid #e0e0e0;
               vertical-align: -3px;
               background: #fff;
               font-size: 18px;
               line-height: 30px;
               text-align: center;

             }
             .adrss{
position: relative;
    display: inline-block;
    background: #fff;
    border: 1px solid #e3e3e3;
    height: 14px;
    line-height: 14px;
    padding: 7px 14px;
    cursor: pointer;
    &::after{
          width: 0;
    height: 0;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    border-width: 6px;
    border-style: dashed dashed dashed solid;
    border-color: rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #a9a9a9;
    position: absolute;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    right: -4px;
    bottom: -4px;
    content: " ";
    }
             }
            }
            &:first-child{
              li{
                    padding: 0 30px;
                    border-left: 1px solid #e0e0e0;
    line-height: 30px;
              }
            }
            
    }
 
   
}


}
</style>
