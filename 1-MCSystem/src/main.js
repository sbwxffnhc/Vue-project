'use strict';

/*引入第三方包*/
import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

import './static/vendor/mui/dist/css/mui.css'

import Axios from 'axios';
//挂载原型
Vue.prototype.$ajax = Axios;
Axios.defaults.baseUrl = 'http://182.254.146.100:8899/api/';

import Moment from 'moment';

/*引入全局组件*/


/*引入自定义组件*/
import App from './app.vue';
import Home from './components/home/home.vue'




/*VueRouter:创建对象并配置路由规则！--导航*/
let router = new VueRouter({
	routes:[
		{path:'/',redirect:{name:'home'}},//重定向
		{name:'home',path:'/home',component:Home}
	]
})

new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})









