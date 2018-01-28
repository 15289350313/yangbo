<template>
	<div class="layout-header-bar">
		<div class="align-items-center cursor-pointer float-l margin-r-20" @click="collapsedSider" :class="rotateIcon" style="height: 61px;line-height: 61px;"><i class="ivu-icon-navicon" style="font-size: 32px;"></i></div>
		<el-breadcrumb class="float-l" separator="/">
			<template v-for="item in routerHash">
				<el-breadcrumb-item style="line-height: 62px !important;">{{item}}</el-breadcrumb-item>
			</template>
		</el-breadcrumb>
		<div class="float-r color10">
			<div class="headertor-con align-items-center float-l"><i class="ivu-icon-arrow-expand" style="font-size: 23px;"></i></div>
			<div class="headertor-con align-items-center float-l"><i class="ivu-icon-locked" style="font-size: 20px;"></i></div>
			<div class="headertor-con align-items-center float-l"><i class="ivu-icon-ios-bell" style="font-size: 23px;"></i></div>
			<div class="headertor-con align-items-center float-l">
				<el-dropdown @command="handleCommand" style="height: 30px;">
					<span class="el-dropdown-link"><i class="ivu-icon-paintbucket color10 margin-r-0" style="font-size: 23px;top: 1px; position: relative;"></i><i class="el-icon-arrow-down el-icon--right"></i></span>
					<el-dropdown-menu slot="dropdown">
						<template v-for="item in ELE_Theme">
							<el-dropdown-item :command="item" :class="ELE_Theme_active.theme == item.theme?'bgcolor21':''" style="line-height: 36px;">
								<i class="ivu-icon-record margin-r-5 f-size-16" :class="item.iconClass"></i>{{item.name}}
							</el-dropdown-item>
						</template>
						<!--<el-dropdown-item disabled><i class="ivu-icon-record margin-r-5 color8 f-size-16"></i>红色</el-dropdown-item>
						<el-dropdown-item divided><i class="ivu-icon-record margin-r-5 color7 f-size-16"></i>橙色</el-dropdown-item>-->
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<div class="headertor-con align-items-center float-l">
				<el-dropdown  @command="userDropdown" style="height: 30px;">
					<span class="el-dropdown-link"><a href="javascript:void(0)">YangBo<span class="ivu-avatar ivu-avatar-circle ivu-avatar-default ivu-avatar-image" style="background: rgb(97, 159, 231); margin-left: 10px;"><img src="../../assets/img/user.jpg"></span></a><i class="el-icon-arrow-down el-icon--right"></i></span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="1">个人中心</el-dropdown-item>
						<el-dropdown-item command="2">退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import Vuex from 'vuex'
	import router from '../../router'
	import store from '@/assets/js/store'
	import ELEMENT from 'element-ui'
	Vue.use(ELEMENT)
	Vue.use(Vuex)
	export default {
		data() {
			return {}
		},
		mounted() {

		},
		computed: {
			ELE_Theme_active() {
				return store.state.ELE_Theme_active;
			},
			ELE_Theme() {
				return store.state.ELE_Theme;
			},
			routerHash() {
				return store.state.router.routerName;
			},
			rotateIcon() {
				return [
					'menu-icon',
					store.state.toggleCollapse.isCollapsed ? 'rotate-90deg' : ''
				];
			}
		},
		methods: {
			//主题状态
			handleCommand(command) {
				this.$message({
					message: '主题“' + command.name + '”设置成功',
					type: 'success'
				});
				console.log(store);
				//store.state.ELE_Theme_active = command;
				store.dispatch("ELE_Theme_active", command);
			},
			//左侧菜单状态
			collapsedSider() {
				store.state.toggleCollapse.isCollapsed = !store.state.toggleCollapse.isCollapsed
			},
			//点击头像下拉菜单返回登陆页
			userDropdown(command) {
				localStorage.removeItem('userName');
		        router.push({ path: 'login' })
		    }
		}
	}
</script>
<style scoped>
	.layout-header-bar .align-items-center {
		transform: rotate(0deg);
		transition: all .3s ease;
	}
	
	.layout-header-bar .align-items-center.rotate-90deg {
		transform: rotate(-90deg);
	}
	
	.layout-header-bar .headertor-con {
		height: 61px;
		padding: 0 12px;
	}
	
	.layout-header-bar .ivu-avatar {
		display: inline-block;
		text-align: center;
		background: #ccc;
		color: #fff;
		white-space: nowrap;
		position: relative;
		overflow: hidden;
		vertical-align: middle;
		width: 32px;
		height: 32px;
		line-height: 32px;
		border-radius: 16px;
	}
	
	.layout-header-bar .el-breadcrumb__inner,
	.layout-header-bar .el-breadcrumb__inner a:hover,
	.layout-header-bar .el-breadcrumb__inner:hover {
		font-weight: normal;
		color: #606266;
		cursor: inherit;
	}
	
	.layout-header-bar .ivu-avatar img {
		width: 100%;
		height: 100%;
	}
</style>