<template lang="html">
  <div class="">
    <h2>Sign In</h2>
    <form class="" @submit.prevent="sendLogin" method="post"  class="boxList" autocomplete="false">
      <label for="">username</label><input type="text" name="" ref="userInput" >
      <label for="">password</label><input type="text" name="" value="">
      <input type="submit" name="" value="Sign in"  class="logBtn">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {}
  },
  methods: {
    sendLogin () {
      let userName = this.$refs.userInput.value
      this.$local.save('wy', {
        login: true,
        userName: userName
      })
      let redirect = this.$route.query.redirect
      if (!redirect) {
        redirect = 'Project'
      }
      this.$router.push({
        path: '/' + redirect
      })
    }
  }
}
</script>

<style lang="css">
.boxList{
  width:288px;
  height:305px;
  margin:0 auto;
  padding:20px;
  background:#fff;
  border-radius:5px;
  border:1px solid #d8dee2;
}
.boxList label{
  display: block;
  font-weight:600;
  font-size:14px;
  text-align:left;
}
.boxList input{
  display: block;
  margin-top:5px;
  margin-bottom:15px;
  width:100%;
  min-height:24px;
  padding:6px 0;
  line-height:20px;
  outline:none;
  border: 1px solid #d1d5da;
  border-radius:3px;
}
.logBtn{
  display:block;
  height:34px;
  width:100%;
  background-color:#28a745;
  background-image:linear-gradient(-180deg, #34d058 0%, #28a745 90%);
  color:#fff;
  font-weight:bold;
  border:none;
  outline:none;
  border-radius:3px;
  cursor:pointer;
}
</style>
