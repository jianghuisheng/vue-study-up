<template>
  <!-- HTML结构：只能有一个根标签 -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{wechat}}</p>
    <p>{{greeting()}}</p>
    <!-- 调用组件 -->
    <Users />
  </div>
</template>

<script>
// js部分
// 局部引用组件
import Users from './Users'
export default {
  name: "HelloWorld",
  // 注册组件
  components:{
    Users
  },
  data(){
    return{
      msg:"yangwenlong",
      wechat:18332362257
    }
  },
  // props: {
  //   msg: String
  // }
  methods:{
    greeting(){
      return `大叫好，我叫${this.msg},我的微信是${this.wechat}`
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 样式部分 */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
