<template lang="html">
  <div class="">
    <nav-bar>

    </nav-bar>
    <div class="">
      <router-link :to="{ path: '/'}">首页</router-link>
      /
      <span :style="{color: '#97a8be'}">默认</span>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import header from '@/backend/childFiles/header'
export default {
  components: {
    navBar: header
  }
}
</script>

<style lang="css">
</style>
