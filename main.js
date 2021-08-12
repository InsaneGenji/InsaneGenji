import Vue from 'vue';
import App from './App';
import store from './store';
// 引入封装函数
import common from '@/common/common.js';

// 全局注册函数
Vue.prototype.$common = common;



Vue.config.productionTip = false;
App.mpType = 'app';
Vue.prototype.$store = store;

const app = new Vue({
	...App,
	store
});
app.$mount();
