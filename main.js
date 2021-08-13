import Vue from 'vue';
import App from './App';
import store from './store';
// 引入封装函数
import common from '@/common/common.js';
// 引入组件
import ICardList from '@/components/i-cardList/i-cardList.vue';



// 注册全局函数
Vue.prototype.$common = common;

// 注册全局组件
Vue.component('i-cardList', ICardList);



Vue.config.productionTip = false;
App.mpType = 'app';
Vue.prototype.$store = store;

const app = new Vue({
	...App,
	store
});
app.$mount();
