import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter); //注册
Vue.use(ElementUI)

import routes from "./route.config";

import "animate.css";




//创建实例
const router = new VueRouter({
    routes
})


new Vue({
  el: '#app',
  render: h => h(App),
  router  // 挂载
})
