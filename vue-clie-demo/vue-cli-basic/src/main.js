import Vue from 'vue'
import App from './App.vue'

// 引入全局组件
// import Users from './components/Users'
// 注册全局组件
// Vue.component('users',Users);

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
