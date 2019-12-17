<template>
  <div>
      <button>点一下</button>
    <p>{{a}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a:'sad'
    }
  },
  mounted() {
    $('p').css('color','blue')
  }
}
</script>

<style scoped lang="less">
</style>
