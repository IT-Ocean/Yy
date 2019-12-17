<template>
  <div class="reset">
    <form>
      <div>
        <span>原密码</span>
        <input v-model="oldpassword">
      </div>
      <div>
        <span>新密码</span>
        <input v-model="newpassword">
      </div>
      <div>
        <span>确认密码</span>
        <input v-model="affirmpassword">
      </div>
      <div class="but">
        <button>修改</button>
        <button type="reset">重置</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        oldpassword:'',
        newpassword:'',
        affirmpassword:''
      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="less">
.reset{
  width: 90%;
  form{
    width: 100%;
    box-sizing: border-box;
    padding: 30px;
    div{
      width: 100%;
      font-size: 18px;
      margin-bottom: 35px;
      span{
        display: inline-block;
        width: 7%;
        text-align: right;
      }
      input{
        border:1px solid #409EFF;
        height: 24px;
        width: 92%;
      }
    }
    .but{
      box-sizing: border-box;
      padding-left: 100px;
      button{
        width: 90px;
        height: 40px;
        margin-left: 20px;
        font-size: 16px;
        color: #ffffff;
        background: #409EFF;
        border:0px;
        border-radius: 5px;
      }
    }
  }
}
</style>
