<template>
  <div class="clearFix el-menu--dark">
    <ul class="header" >
      <router-link to="/" class="logo" exact tag="li">
        <img src="../../assets/logo1.jpg" style="width:50px;height:50px;">
      </router-link>
      <router-link to="/Project"  tag="li" >
        我的项目
      </router-link>
      <router-link to="/Workbentch"   tag="li">
        工作台
      </router-link>
      <router-link to="/Document"  tag="li">
        文档
      </router-link>
    </ul>
    <div class="txPart" v-show="isLogin">
      <div class="tx">
        <img src="../../assets/logo2.jpg">
        <span>{{userName}}</span>
      </div>
      <div class="loginOut" @click="loginOut">
        <ul class="">
          <li class="">登出</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        userName: '',
        isLogin: false
      }
    },
    created () {
      let info = this.$local.fetch('wy')
      this.isLogin = info.login
      this.userName = info.userName
    },
    methods: {
      loginOut () {
        this.$local.save('wy', null)
        this.$router.push('/Login')
      }
    }
  }
</script>
<style>
.el-menu--dark{
  background:#324157;
  height:60px;
  width:100%;
}
  ul li{
    list-style-type: none;
    float:left;
  }
  .header li{
    width:113px;
    height: 60px;
    line-height: 60px;
    color:#fff;
  }
  .header li.logo{
    line-height:100px;
  }
  .tx{
    line-height: 60px;
    margin-right: 12px;
  }
  .txPart:hover .loginOut{
    opacity:1;
    height:68px;
  }
  .tx img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin-right: 10px;
    vertical-align: middle;
  }
  .tx span{
    color:#fff;
  }
  .txPart{
    float:right;
    position:relative;
  }
  .loginOut{
    position: absolute;
    top: 60px;
    left: 0;
    border: 1px solid #d1dbe5;
    padding: 5px 0;
    background-color: #fff;
    z-index: 100;
    text-align: center;
    min-width: 100%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    opacity: 0;
    height: 0;
    transition: .5s;
    overflow: hidden;
    color:#000;
  }
  .header li.is-Active{
    color:#20a0ff;
  }
</style>
