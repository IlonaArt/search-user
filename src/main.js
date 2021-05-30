import App from './App.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './components/Main.vue';
import UserInfo from './components/UserInfo.vue';
import E404 from './components/E404.vue';

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Main},
  { name: 'UserInfo', path: '/user/:id', component: UserInfo },
  { path: '*', component: E404 }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

