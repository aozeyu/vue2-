import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../public/less/_theme.less'
Vue.config.productionTip = false
Vue.use(Mint)
Vue.prototype.$axios = axios
//处理图片
Vue.prototype.dealImgUrl = function (url,replaceInfo='128.180') {
  return url.replace(/w\.h/,replaceInfo)
}
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
