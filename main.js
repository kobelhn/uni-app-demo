import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import utils from 'common/js/utils.js'
import api from 'common/js/api.js'

Vue.use(uView);
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$utils = utils

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
