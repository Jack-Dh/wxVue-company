import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vant from 'vant'
import 'vant/lib/index.css'
import './assets/iconfont/iconfont.css'
import VueCookies from 'vue-cookies'
import {Lazyload} from 'vant'

Vue.use(Lazyload,{
    loading:'./LazyImg/timg.gif',
    error:'assets/timg.gif',
    lazyComponent:true,
})

// axios.defaults.headers.common['token'] = 'Yvm9Oj286PrR5o1s5vWuIOaRSGAOIWI37yEVM1Mlhdaplui8Hk6FUEcsePumrtNu';
// axios.defaults.headers.common['token']=VueCookies.get('wxtoken')
Vue.use(VueCookies)


Vue.prototype.$axios = axios

Vue.use(vant)

//请求拦截
axios.interceptors.request.use(config => {
    var wxtoken = VueCookies.get('wxtoken')
    if (wxtoken != null) {
        config.headers['token'] = wxtoken
        console.log(config)
    }
    return config
}), err => {
    return Promise.reject(err)
}


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
