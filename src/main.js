// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import store from '././store'
import router from '././router'
import ELEMENT from 'element-ui'
import httpRequest from '@/assets/js/httpRequest'
import '@/assets/css/common.css'
import "@/assets/lib/xenon-ui/bootstrap.css"
import "@/assets/lib/element-ui@2.0.11/element-ui.css"
import "@/assets/lib/xenon-ui/xenon-core.css"
import "@/assets/lib/xenon-ui/xenon-components.css"
import "@/assets/css/icons.css"
import "@/assets/css/animate.min.css"

Vue.use(Router)
Vue.use(ELEMENT)
//命名一个空的VUE实例，用于在难以获取到VUE对象时候使用。
//window.vm = new Vue();

//验证是否登录
httpRequest.getUserAccount();
//如果存在则跳转至index
httpRequest.getUserAccountYes();

new Vue({
	el: '#app',
	router,
	store,
	watch: {
		$route(to, from) {
			//验证是否登录
			httpRequest.getUserAccount();
		}
	},
	/*components: {
		App
	},
	template: '<App/>'*/
})