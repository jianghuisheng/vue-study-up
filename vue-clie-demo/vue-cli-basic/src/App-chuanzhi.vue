<template>
  <div id="app">
    <Header @titleChange="updateTitle" :title="title"/>
    <!-- 1.传值 2.传引用（对象，数组） -->
    <Users :users="users" />
    <hr />
    <Users :users="users" />
    <Footer :title="title" />
  </div>
</template>

<script>
import Users from "./components/Users";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Users,
    Header,
    Footer
  },
  data() {
    return {
      users: [
        { name: "小猪佩奇", wechat: "10086", show: false },
        { name: "大象艾美莉", wechat: "10000", show: false },
        { name: "大象艾美莉", wechat: "10010", show: false },
        { name: "mr.yang", wechat: "18332362257", show: false },
        { name: "mrs.li1", wechat: "bugaosuni", show: false },
        { name: "mrs.li2", wechat: "bugaosuni", show: false },
        { name: "mrs.li3", wechat: "bugaosuni", show: false }
      ],
      title: "Vue Components Demo"
    };
  },
  methods: {
    updateTitle(updatedTitle) {
      console.log(updatedTitle);
      this.title = updatedTitle;
    }
  },
  beforeCreate() {
    alert("这时实例还没有被创建，所以你无法知道data,也不能用watch监听");
  },
  created() {
    alert("这时实例已经创建，可以得到data，调用watch，但是页面还是空白的");
  },
  beforMount() {
    alert("页面挂载前，此时页面依然是空白的。这时render函数首次被调用。");
  },
  mounted() {
    alert("页面挂载了，这时你可以看到页面的内容，也可以访问dom");
  },
  beforeUpdate() {
    alert("数据更新前，也就是虚拟DOM打补丁之前。");
  },
  updated() {
    alert("数据已经更新完毕。");
  },
  beforeDestroy() {
    alert("页面离开之前被调用，清楚定时器，或者三方的一些DOM结构");
  },
  destroyed() {
    alert("实例已经完全被销毁");
  }
};
</script>

<style>
</style>
