<template>
  <div class="login">
      <div class="container">
           <div class="login-top">
              <img src="/imgs/login-logo.png" alt="" srcset="">
          </div>
      </div>
      <div class="wrapper">
      <div class="container">
         
          <div class="login-body" >
              <div class="login-from" >
                  <h3>
                    <span class="sep-line checked">账号登录</span> |
                      <span class="sep-line">扫码登录</span>
                  </h3>
                      
                  <div class="input">
                  <input type="text" name="username" id="username" value="" v-model="data.username" placeholder="这是账号登录">
                  </div> 
                   <div class="input">
                  <input type="text" name="password" id="password" value="" v-model="data.password" placeholder="这是密码">
                  </div>
                  <div class="btn-box">
                  <a href="#0" class="btn" @click="loginGo">登录</a>
                  </div>
                  <div class="tips">
                      <div class="sms">
                          <span>手机短信登录/注册</span>
                      </div>
                      <div class="reg">
                    <span>立即注册</span>
                    <span>忘记密码</span> 
                      </div>            
                  </div>
              </div>
          </div>
      </div>
      </div>
      <div class="footer">
          <div class="footer-link">
               <a href="https://github.com/24808/superMi" target="_blank">24808主页</a><span>|</span>
        <a href="https://github.com/24808/Mobile-phone-store" target="_blank">Vue全栈课程</a><span>|</span>
        <a href="https://github.com/24808/superMi" target="_blank">React全家桶课程</a><span>|</span>
        <a href="https://github.com/24808/Mobile-phone-store" target="_blank">微信支付专项课程（H5+小程序/云+Node+MongoDB）</a>
          </div>
           <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
      </div>
  </div>
</template>

<script>
import {login} from "./../network/home"
export default {
  name: "login",
  data() {
    return {
      data: {
          username:"24808",
          password:"24808",
          userId:""
      },
    };
  },
  mounted() {
   
  },
   methods: {
       loginGo(){
           login(this.username,this.password).then(res=>console.log(res)).catch(err=>console.log(err));
           
       }
   }

};
</script>
<style lang="scss" scoped>
 @import  "./../assets/scss/base.scss";
 @import  "./../assets/scss/config.scss";
 @import  "./../assets/scss/mixin.scss";
 @import  "./../assets/scss/button.scss";
 .login{
     &>.container{
         height: 113px;
         img{
             width: auto;
             height: 100%;
         }
     }
.wrapper{
    background: url("/imgs/login-bg.jpg") no-repeat center;
    .container{
        height: 576px;
        .login-from{
        position: absolute;
        right: 0;
        box-sizing: border-box;
        width: 410px;
        height: 510px;
       padding-left: 31px;
        padding-right: 31px;
        background: #fff;
        bottom: 29px;
        }
        h3{
            line-height: 23px;
            font-size: 24px;
            text-align: center;
            margin: 40px 0 49px ;
            cursor: pointer;
        }
        .checked{
            color:#FF6600;
            margin: 0 32px;
          }
        .sep-line{
            margin: 0 32px;
        }
        .input{
            display: inline-block;
            width: 338px;
            height: 50px;
            border: 1px solid #e5e5e5;
            margin-bottom: 20px;
            input{

                width: 100%;
                height: 100%;
                border: none;
                // padding: 18px;
                // padding-top: 0;
                text-indent: 20px;
            }
        }
        .btn-box{
             text-align: center;
        }
        .btn{
            width: 100%;
            height: 50px;
            line-height: 50px;font-size:16px;
        }
        .tips{
            display: flex;
            justify-content: space-between;
            margin-top: 14px ;
            font-size: 14px;
            cursor: pointer;
        .sms{
            color: #ff6600;
        }
        .reg{
    color: #999;
    span{
        margin: 0 7px;
    }
}
        }
    }
}

 }
 .footer{
     height: 100px;
     padding-top:60px;
     color: #999;
     font-size: 16px;
     text-align: center;
     a{
         color:#999;
         display: inline-block;
     }
         span{
             margin:  0  10px;
         }
    .copyright{
        margin-top: 13px;
    }
 }
</style>
