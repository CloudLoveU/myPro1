<template lang="html">
  <div class="">
    <div class="header">
      <router-link to="/" class="logo lf">
        <img src="../assets/logo1.jpg" alt="">
      </router-link>
      <router-link :to="{ path: '/Login' }" tag="button" class="login rt">Sign in </router-link>
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
}
</script>

<style lang="css">
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
  .logo img{
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
    margin-right:10px;
    cursor:pointer;
  }
  .content h1{
    font-size:50px;
  }
  .header button{
    width:60px;
    height:23px;
    background:#000;
    color:#fff;
    border:none;
    outline:none;
  }
  .login{
    font-weight:bold;
    cursor: pointer;
  }
</style>
