import './utils/rem'
import Vue from 'vue'
import App from './App'

import '../public/icon/css/font-awesome.css'

//全局引入bootstrap
// import '../static/bootstrap.min.css'
// import '../static/mint.css'

// 引入全局路由
import router from './router/index'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

//引入全局的rem
// import '../public/js/font'

// import '../public/js/mint'
import axios from 'axios'
Vue.prototype.$http = axios

// import 'element-ui/lib/theme-chalk/index.css';

//自定义插件 loading Vue.use()
// import Loading from './components/Loading'
// Vue.use(Loading);  


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
