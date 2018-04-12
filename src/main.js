// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routersList from './router/router'
import store from './store'  //状态管理
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import service from '@/utils/fetch' //axios
import FastClick from 'fastclick'   //fastclick

if ('addEventListener' in document) { //解决移动端点击延迟
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(MintUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.prototype.service = service;        //注册全局service

Vue.config.productionTip = false;

const router = new VueRouter({           //滚动行为监测，返回是否回到原来位置，模拟app端数据缓存
	routes:routersList,
	mode:'hash',                  //默认行为
	//strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {         //路由配置时候meta，参数设置为keeplive,则不会进行滚动模拟,滚动到顶部
				from.meta.savedPosition = document.body.scrollTop; 
			}
		    return { x: 0, y: to.meta.savedPosition || 0 }
		}
	}
})
/* eslint-disable no-new */
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')