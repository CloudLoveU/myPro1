<template>
  <div class="clearFix el-menu--dark">
    <ul class="header" >
      <router-link to="/" class="el-menu-item logo" exact tag="li">
        <img src="../../assets/logo1.jpg" style="width:50px;height:50px;">
      </router-link>
      <router-link to="/Project" class="" tag="li" >
        我的项目
      </router-link>
      <router-link to='/Workbench' class=""  tag="li">
        工作台
      </router-link>
      <router-link to="/Document" class="" tag="li">
        文档
      </router-link>
    </ul>
    <div class="" v-show="isLogin">
      <div class="">
        <img src="../../assets/portrait.png">
        <span>{{userName}}</span>
      </div>
      <div class="">
        <ul class="">
          <li class="" @click="loginOut">登出</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        userName: '',
        isLogin: false
      }
    }
  }
</script>
<style>
  header li{
    float:left;
    
  }
</style>
