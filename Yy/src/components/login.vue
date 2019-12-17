<template>
  <div class="login">
    <div class="login-main">
      <div class="user">
        <span>用户名</span>
        <input v-model="user" type="text" placeholder="请输入用户名">
      </div>
      <div class="password">
        <span>密&emsp;码</span>
        <input v-model="password" type="password" placeholder="请输入密码">
      </div>
      <div class="but">
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user:'',
        password:''
      }
    },
    methods: {
      login(){
        this.$router.push('/index')
      }
    }
  }
</script>

<style scoped lang="less">
  .login{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 300px;
    .login-main{
      display: inline-block;
      padding: 25px;
      font-size: 18px;
      padding-bottom: 0px;
      box-shadow: 1px 1px 10px 3px #999;
      div{
        margin-bottom: 20px;
      }
      input{
        height: 25px;
      }
      button{
        width: 100%;
        height: 35px;
        background: blue;
        color: aliceblue;
        border: 0px;

      }
    }
  }
</style>
