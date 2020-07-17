<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{url}}</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
   data () {
    return {
      // 全局环境变量的使用
      // 平时开发走开发环境 development  打包走生产环境 production  VUE_APP_XXX_XXX...
      url: process.env.VUE_APP_URL
    }
  },
  components: {
    HelloWorld
  }
}
</script>
