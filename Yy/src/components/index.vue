<template>
  <div>
    <header>
      <div class="head-fl">这是一个测试性的网站</div>
      <div class="head-fr">
        <img src="../assets/images/user.jpg" alt="">
      </div>
    </header>
    <main>
      <div class="main">
        <ul>
          <li v-for="item in menu" :key="item.id" @click="menus(item.id)">{{item.name}}</li>
        </ul>
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menu:[
          {id:1,name:'用户管理'},
          {id:2,name:'修改密码'},
        ]
      }
    },
    methods: {
      menus(id){
        $('.main ul li').eq(id-1).css('color','rgb(255, 208, 75)').siblings().css('color','#fff')
          if(id == 1){
            this.$router.push('/index/user')
          }else if(id == 2){
            this.$router.push('/index/reset')
          }
      }
    }
  }
</script>
<style lang="less" scoped>
header{
  width: 100%;
  height: 60px;
  background: #434a50;
  .head-fl{
    float: left;
    padding-left: 30px;
    font-size: 18px;
    font-weight: bold;
    line-height: 60px;
    color: #fff;
  }
  .head-fr{
    float: right;
    height:60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
main{
  width: 100%;
  >div{
    float: left;
  }
  .main{
    width: 10%;
    height: 1000px;
    background: #545c64;
    color: aliceblue;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    li{
      padding: 10px 0;
    }
    li:hover{
      background: #777;
    }
  }
}
</style>
