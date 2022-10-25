import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import md5 from 'js-md5'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import axios from 'axios'
import '@/styles/index.scss' // global css
import '@/icons' // icon
import '@/permission' // permission control
import 'normalize.css/normalize.css' // A modern alternative to CSS resets


Vue.config.productionTip = false
Vue.prototype.$md5 = md5

axios.defaults.baseURL = 'http://localhost:8000';
Vue.prototype.$axios = axios

Vue.use(ElementUI)


new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
