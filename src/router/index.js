import Vue from 'vue'
import Router from 'vue-router'

//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '*',
		redirect: 'login',
	}, {
		path: '/login',
		component(resolve) {
			resolve(require('@/components/login/login.vue'))
		}
	}, {
		path: '/index',
		component(resolve) {
			resolve(require('@/components/App.vue'))
		},
		//这里就是二级路由的配置
		children: [{
			path: '/index',
			redirect: 'dashboard',
		}, {
			path: 'dashboard',
			meta: {
				title: ['桌面'],
				activeName: 'dashboard',
				openNames: 'dashboard'
			},
			component(resolve) {
				resolve(require('@/components/dashboard.vue'))
			}
		}, {
			path: 'grid',
			meta: {
				title: ['基础组件', '栅格'],
				activeName: 'grid',
				openNames: 'base'
			},
			component(resolve) {
				resolve(require('@/components/base/grid.vue'))
			}
		}]
	}]
})