import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import 'amfe-flexible'
import './utils/validation.js'

// 注册Vant组件
import './utils/register-vant'

// 加载全局样式
// 注意：该样式文件要放到第三方样式之后
import './styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
