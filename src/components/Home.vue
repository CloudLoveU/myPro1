<template lang="html">
  <div class="">
    <div class="header">
        <img src="../assets/logo1.jpg" alt="" class="logo lf">
        <div class="rt">
          <router-link :to="{ path: '/Login' }" tag="button" class="login lf" v-if="!isLogin">Sign in
          </router-link>
          <img src="../assets/logo2.jpg" alt="" class="loginImg lf" v-if="isLogin">
        </div>
    </div>
    <div class="content">
      <h1>study Vue-Router together</h1>
      <ul>
        <router-link to="/Project" tag="li">myProject</router-link>
        <router-link :to="{ name: 'Document'}" tag="li">myDocument</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLogin: false
    }
  },
  created () {
    // 拿到登录信息
    let info = this.$local.fetch('wy')
    this.isLogin = info.login
  }
}
</script>

<style lang="css" scoped>
  .header{
    overflow: hidden;
    padding: 11px 201px 45px;
  }
  .content{
    clear:both;
  }
  .lf{
    float:left;
  }
  .rt{
    float:right;
  }
  .loginImg{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin-right: 10px;
    vertical-align: middle;
  }
  img.logo{
    width:50px;
    height:50px;
  }
  ul{
    overflow: hidden;
    margin:0 auto;
    width:400px;
    height:100px;
  }
  ul li{
    width:160px;
    height:38px;
    line-height: 38px;
    background: #13ce66;
    color:#fff;
    font-size: 24px;
    float:left;
    list-style-type: none;
    padding:8px;
    border-radius: 28px;
    cursor:pointer;
  }
  .content h1{
    font-size:50px;
  }
  .header button{
    width:60px;
    height:44px;
    line-height: 44px;
    background:#000;
    color:#fff;
    border:none;
    outline:none;
    margin-right:10px;
  }
  .login{
    font-weight:bold;
    cursor: pointer;
  }
</style>
