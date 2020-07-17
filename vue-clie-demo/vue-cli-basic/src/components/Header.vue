<template>
  <div @click="changeTitle" class="header">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      // title: "Vue Components Demo"
    };
  },
  methods:{
    changeTitle(){
      //参数1事件名称 参数修改值
      this.$emit('titleChange',"Mr.Yang修改了title.")
    }
  }
};
</script>

<style scoped>
.header {
  background: lightgreen;
}
h1 {
  padding: 6px;
  text-align: center;
  color: #222;
}
</style>