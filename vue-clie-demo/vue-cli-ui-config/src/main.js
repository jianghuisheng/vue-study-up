import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import testDefault,{ testFunction, testName } from '.././data/test.js';
// testDefault.testDefault();
import testString,{ testFunction, testName } from '.././data/test.js';
console.log(testString.testString.num)
testFunction(`My name is ${testName}`);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
