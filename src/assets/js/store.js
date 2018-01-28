import Vue from 'vue'
import Vuex from 'vuex'
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Vuex);
//更新数据步骤原则：actions > mutations > state
var store = new Vuex.Store({
	state: {
		//用户信息
		ELE_User:{
			userName:'yangbo',
		},
		//当前主题
		ELE_Theme_active: {
			name: '黑色',
			theme: 'ELE_Theme_Black',
			iconClass: 'color10'
		},
		//主题数据
		ELE_Theme: [{
				name: '白色',
				theme: 'ELE_Theme_White',
				iconClass: 'color11 ivu-icon-ios-circle-outline'
			},
			{
				name: '黑色',
				theme: 'ELE_Theme_Black',
				iconClass: 'color10'
			},
			{
				name: '蓝色',
				theme: 'ELE_Theme_Blue',
				iconClass: 'color2'
			},
			{
				name: '绿色',
				theme: 'ELE_Theme_Green',
				iconClass: 'color6'
			},
			{
				name: '红色',
				theme: 'ELE_Theme_Red',
				iconClass: 'color8'
			},
			{
				name: '橙色',
				theme: 'ELE_Theme_Orange',
				iconClass: 'color7'
			}
		],
		//导航折叠
		toggleCollapse: {
			side1: '',
			isCollapsed: false,
		},
		//路由相关
		router: {
			//路由面包屑信息
			routerName: '',
			//路由选中状态
			routerNameEn: '',
			//路由选中父亲状态
			activeName: ''
		},

	},
	//计算属性，一般不常用
	getters: {},
	//actions针对mutations里的方法进行提交，改变state中的数据
	mutations: {
		//改变路由面包屑信息
		ROUTER_ROUTERNAME: function(state, val) {
			state.router.routerName = val;
		},
		//改变路由选中状态
		ROUTER_ROUTERNAMEEN: function(state, val) {
			state.router.routerNameEn = val;
		},
		//改变路由选中父亲状态
		ROUTER_ACTIVENAME: function(state, val) {
			state.router.activeName = val;
		},
		//改变主题
		ELE_THEME_ACTIVE: function(state, val) {
			state.ELE_Theme_active = val;
		},
		//改变用户信息
		ELE_ELE_USER: function(state, val) {
			console.log(val);
			state.ELE_User = val;
		},
	},
	actions: {
		//新版本通知消息
		ELE_message: function(context) {
			vm.$notify({
				title: '欢迎你朋友！',
				message: '作者在elementUi基础上开发的Admin系统',
				position: 'bottom-right',
				duration: 0
			});
		},
		//提交路由选中状态
		router_routername: function(context, val) {
			context.commit("ROUTER_ROUTERNAME", val);
		},
		//提交路由选中状态
		router_routerNameEn: function(context, val) {
			context.commit("ROUTER_ROUTERNAMEEN", val);
		},
		//提交路由选中父亲状态
		router_activeName: function(context, val) {
			context.commit("ROUTER_ACTIVENAME", val);
		},
		//提交改变主题
		ELE_Theme_active: function(context, val) {
			context.commit("ELE_THEME_ACTIVE", val);
		},
	}
})
export default store;