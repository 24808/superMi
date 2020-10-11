<template>
  <div class="security ">
    <div class="title-item">
      <h4 class="title-big">安全等级</h4>
      <p class="fen"><em>40</em>分</p>
      <div class="demonstration">
        <li v-show="false">{{ CountDown }}</li>
        <!-- <span class="demonstration">自定义初始值</span> -->
        <div class="slider">
          <el-slider v-model="value2" disabled></el-slider>
        </div>
      </div>
      <p class="security_level_txt">存在<em>2</em> 项风险</p>
    </div>
    <ul class="device-detail-area">
      <li class="changePassword">
        <div class="font-img-item">
          <i></i>
          <p class="dis-inb">账号密码</p>
          <p class="font-default">用于保护帐号信息和登录安全</p>
          <div class="ada-btn-area">
            <a href="#" class="n-btn" @click="showModal = true">修改</a>
          </div>
        </div>
      </li>
      <li class="changeEmail">
        <div class="font-img-item">
          <i></i>
          <p class="dis-inb">账号密码</p>
          <p class="font-default color-active">用于保护帐号信息和登录安全</p>
          <div class="ada-btn-area"><a href="#" class="n-btn">修改</a></div>
        </div>
      </li>
      <li class="changeMobile">
        <div class="font-img-item">
          <i></i>
          <p class="dis-inb">账号密码</p>
          <p class="font-default color-active">用于保护帐号信息和登录安全</p>
          <div class="ada-btn-area"><a href="#" class="n-btn">绑定</a></div>
        </div>
      </li>

      <li class="setMibao">
        <div class="font-img-item">
          <i></i>
          <p class="dis-inb">账号密码</p>
          <p class="font-default color-active">用于保护帐号信息和登录安全</p>
          <div class="ada-btn-area"><a href="#" class="n-btn">s设置</a></div>
        </div>
      </li>
    </ul>
    <Modalstate
      title="提示"
      sureText="查看购物车"
      btnType="3"
      modalTyoe="ac-submit"
      :showModal="showModal"
      @cancel="showModal = false"
      @submit="gotopassword"
    >
      <!-- 
      @cancel="showModal = true" -->
      <template v-slot:body>
        <div class="modify_pwd">
          <p>原密码</p>
          <input
            type="password"
            placeholder="输入原密码"
            v-model="oldPass"
            @blur="focusing(1)"
            @focus="gofocus(1)"
          />
          <span v-show="oldPassshow">原密码不能为空</span>
          <p>原密码</p>
          <input
            type="password"
            placeholder="输入新密码"
            v-model="password"
            @blur="focusing(2)"
            @focus="gofocus(2)"
          />

          <input
            type="password"
            v-model="pwdVisiable"
            placeholder="重复新密码"
            @blur="focusing(3)"
            @focus="gofocus(3)"
          />
          <div class="code">
   <span v-show="pwdVisiableshow">{{ newpassinfo }}</span>
            <p>验证码</p> <input
            v-if="emailnoshow"
           style=""
            type="text"
            v-model="codeinfo"
            placeholder="验证码"
            @blur="focusing(4)"
            @focus="gofocus(4)"
          />
           <input
           v-else
            type="text"
            v-model="email"
            placeholder="发送邮箱验证"
            @blur="focusing(5)"
            @focus="gofocus(5)"
            
          />
          
           <a href="javascript:;" class="btn" @click="goemail">发送验证码</a>
          </div>
         <span  v-if="emailnoshow" v-show="codeshow">验证码不能为空</span>
        
        </div>
      </template>
    </Modalstate>
  </div>
</template>
<script>
import Modalstate from "./../../../components/common/Modalstate";
import {pudpwd,Yz} from "./../../../network/login";
export default {
  name: "security",
  components: { Modalstate },
  data() {
    return {
      value2: 50,
      showModal: false,
      //密码验证
      oldPass: "",
      oldPassshow: false,
      password: "",
      pwdVisiable: "",
      pwdVisiableshow: false,
      newpassinfo: "",
      codeshow:false,
      codeinfo:"",
      //邮箱验证
      email:"",
      emailnoshow:false,
      T:{},
      daojishi:{},
      emaildianji:true,
      CountDown:0//计数
    };
  },
  mounted () {
    //  this.Djs_time(); 
  },
  methods: {
    //   Djs_time: function() {
    //   setInterval(() => {
    //     var presentTime = new Date().getTime();
    //     this.CountDown = presentTime;
    //   }, 1000);
    // },
    //发送邮箱验证


    goemail(){
      Yz(this.email).then(res=>{
        this.emailnoshow=true;
           if(this.emaildianji){
        this.emaildianji=false,
    this.$message.success("发送验证码成功,有效期120秒");
      this.daojishi=120

      this.T = setInterval(() => {
        this.daojishi=this.daojishi-1;
 this.CountDown++;

    if(this.daojishi<=0){
      clearInterval(this.T);
   this.emaildianji=true;
   this.emailnoshow=false;
      }
      }, 1000);
      }
  
      })
   
    },
    //提交修改
    gotopassword() {
      this.focusing(1);
      this.focusing(2) || this.focusing(3);
      this.focusing(4);
      if (!this.oldPassshow && !this.pwdVisiableshow && !this.codeshow) {
        // this.$message.success("假装修改成功");
        this.showModal= false
        pudpwd(this.oldPass,this.password,this.codeinfo).then(res=>{
this.$message.success("修改成功");
  this.$router.push("/index");
         })
      }
      // updpass(this.oldPass,this.password).then(res=>{
      //   this.$router.push("/login")
      // })
    },
    //获得焦点事件
    gofocus(value) {
      if (value == 1) {
        this.oldPassshow = false;
      } else if (value == 2) {
        this.pwdVisiableshow = false;
      } else if (value == 3) {
        this.pwdVisiableshow = false;
      }else if (value == 4) {
        this.codeshow = false;
      }
    },
    //失去焦点事件
    focusing(value) {
      if (value == 1) {
        if (this.oldPass == "") {
          this.oldPassshow = true;
        } else {
          this.oldPassshow = false;
        }
      } else if (value == 2) {
        if (this.password.length <6  || this.password.length > 12) {
          this.pwdVisiableshow = true;
          this.newpassinfo = "密码必须大于6位并小于12位";
        } else {
          this.pwdVisiableshow = false;
        }
      } else if (value == 3) {
        if (this.pwdVisiable != this.password) {
          this.pwdVisiableshow = true;
          this.newpassinfo = "密码不一致";
        } else {
          this.pwdVisiableshow = false;
          this.focusing(2);
        }
      }else if (value == 4) {
        if (this.codeinfo == "") {
         this.codeshow = true;
        } else{
          this.codeshow = false;
        }
      }
    },
  },
};
</script>
><style lang="scss">
@import "./../../../assets/scss/mixin.scss";
@import "./../../../assets/scss/button.scss";
.security {
  .title-item {
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid #e6e6e6;
    .title-big {
      font-weight: bold;
      line-height: 1.5;
      color: #333;
      font-size: 20px;
    }

    .fen,
    .security_level_txt {
      font-size: 14px;
      color: #9d9d9d;
      line-height: 1.5;
      em {
        color: #ff6600;
        font-size: 18px;
        font-style: normal;
        font-weight: bold;
      }
    }
    .fen {
      padding: 0 10px;
    }

    // background: #ff6600;
    .slider {
      // background-color: #ff6600;
      .el-slider__bar {
        background-color: #ff6600;
      }
      .el-slider__button-wrapper {
        z-index: 0;
      }
    }

    .demonstration {
      width: 360px;
      height: 4px;
    }
  }
  .device-detail-area {
    li {
      padding: 30px 0;
      position: relative;
      border-bottom: 1px solid #f2f2f2;
      margin-bottom: -1px;
      list-style: none;

      .dis-inb {
        font-size: 16px;
        color: #333;
        line-height: 1.5;
        font-weight: bold;
      }
      .font-default {
        color: #9d9d9d;
        line-height: 1.5;
        font-size: 14px;
      }
      .color-active {
        color: #ff6600;
        font-size: 14px;
      }
      &.changePassword {
        .font-img-item {
          i {
            background-position: 0px 0;
          }
        }
      }
      &.changeEmail {
        .font-img-item {
          i {
            background-position: -40px 0;
          }
        }
      }
      &.changeMobile {
        .font-img-item {
          i {
            background-position: -80px 0;
          }
        }
      }
      &.setMibao {
        .font-img-item {
          i {
            background-position: -120px 0;
          }
        }
      }
      .font-img-item {
        margin-left: -10px;
        position: relative;
        overflow: hidden;
        padding: 0 0 0 56px;
        .ada-btn-area {
          position: absolute;
          top: 0px;
          right: 25px;
        }
        i {
          @include positionleftImg(
            absolute,
            0,
            7px,
            40px,
            40px,
            "https://account.xiaomi.com/static/res/b52bef2/account-static/respassport/acc-2014/img/device-icos.png"
          );
        }
      }
    }
  }
  .btn-default {
    background-color: #fff;
    border: 1px solid #e8e8e8;
    color: #000;
  }
  .modify_pwd {
    
    p {
      font-size: 15px;
      color: #555;
      font-weight: bold;
      line-height: 30px;
    }

    input {
      height: 20px;
      line-height: 20px;
      border: 1px solid #9d9d9d;
      padding: 10px;
      display: block;
      width: 310px;
      margin-top: 8px;
    }
    span {
      color: #f66;
    }
    .code{
      input{
        width: 200px;
        display: inline-block;
      }
      a{
        height: 42px;
        vertical-align: middle;
        line-height: 42px;
      }
    }
  }
}
</style>
