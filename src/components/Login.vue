<template lang="html">
  <div class="">
    <h2>Sign In</h2>
    <form class="" action="index.html" method="post"  class="boxList">
      <label for="">username</label><input type="text" name="" value="">
      <label for="">password</label><input type="text" name="" value="">
      
    </form>
  </div>
</template>

<script>
export default {
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
</style>
