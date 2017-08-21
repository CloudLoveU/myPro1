<template lang="html">
  <div class="container">
    <nav-bar>

    </nav-bar>
    <div class="breadCrumb">
      <router-link :to="{ path: '/'}">首页</router-link>
      /
      <span :style="{color: '#97a8be'}">{{flag}}</span>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import header from '@/backend/childFiles/header'
let flags = {
  Project: '我的项目',
  Workbentch: '工作台',
  Document: '文档'
}
export default {
  data () {
    return {
      flag: ''
    }
  },
  watch: {
    $route () {
      this.flag = flags[this.$route.path.slice(1)]
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.flag = flags[to.path.slice(1)]
    })
  },
  components: {
    navBar: header
  }

}
</script>

<style lang="css">
  html,body{
    padding:0;
    margin:0;
  }
  .breadCrumb{
    float:left;
    width: 100%;
    height: 40px;
    background: #eff2f7;
    line-height: 40px;
    padding: 0px 70px;
    z-index: 10;
    text-align: left;
    font-size:14px;
  }
  .breadCrumb a{
    text-decoration: none;
  }
  .is-Active{
    color:#20a0ff;
  }
</style>
