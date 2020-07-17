<template>
  <div id="app">
    <!-- <FormHelper /> -->
    <FormHelper>
      <div slot="title">
        <h2>{{title}}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div slot="text">
        <p>这个是文本内容</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ipsa!</p>
      </div>
    </FormHelper>
  </div>
</template>

<script>
import FormHelper from "./components/FormHelper";
export default {
  name: "App",
  components: {
    FormHelper
  },
  data() {
    return {
      title: "这个是title"
    };
  },
  methods: {}
};
</script>

<style>
/* h2 {
  background: lightgreen;
} */
</style>
