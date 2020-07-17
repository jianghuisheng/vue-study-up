<template>
  <div>
    <!-- 匿名插槽 -->
    <!-- <slot></slot> -->
    <!-- 具名插槽 -->
    <slot name="title"></slot>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, earum.</h1>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
h2 {
  background: lightgreen;
}
</style>
