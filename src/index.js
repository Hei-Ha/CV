import Vue from 'vue'
import App from "./App.vue";
// import ElementUI from 'element-ui'
import { Row, Col } from 'element-ui'
import './index.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Row)
Vue.use(Col)
new Vue({
    el: '#app',
    render: h => h(App)
})