<template>
	<el-scrollbar ref="scrollbar" :class="[scrollbarClass,theme]">
		<div style="height:inherit">
			<el-menu :collapse="isCollapse" @open="handleOpen" @close="handleClose" style="border-right: 0;" :router="true" :default-active="activeName" class="el-menu-vertical-demo">
				<div class="layout-logo f-size-26"><img class="margin-r-5" src="@/assets/img/logo.png">Vue UI</div>
				<el-menu-item index="dashboard">
					<i class="el-icon-menu"></i>
					<span slot="title">桌面</span>
				</el-menu-item>
				<el-submenu index="1">
					<template slot="title">
						<i class="ivu-icon-android-globe f-size-20"></i>
						<span>概览</span>
					</template>
					<el-menu-item index="1-1"><i class="el-icon-menu"></i>安装</el-menu-item>
					<el-menu-item index="1-2"><i class="el-icon-menu"></i>快速上手</el-menu-item>
					<el-menu-item index="1-2"><i class="el-icon-menu"></i>国际化</el-menu-item>
					<el-menu-item index="1-2"><i class="el-icon-menu"></i>定制主题</el-menu-item>
					<el-menu-item index="1-2"><i class="el-icon-menu"></i>权限配置</el-menu-item>
					<el-menu-item index="1-2"><i class="el-icon-menu"></i>更新日志</el-menu-item>
				</el-submenu>
				<el-submenu index="base">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>基础组件</span>
					</template>
					<el-menu-item index="grid"><i class="el-icon-menu"></i>栅格</el-menu-item>
					<el-menu-item index="container"><i class="el-icon-menu"></i>布局</el-menu-item>
					<el-menu-item index="color"><i class="el-icon-menu"></i>色彩</el-menu-item>
					<el-menu-item index="font"><i class="el-icon-menu"></i>文字</el-menu-item>
					<el-menu-item index="mgpd"><i class="el-icon-menu"></i>边距填</el-menu-item>
					<el-menu-item index="icon"><i class="el-icon-menu"></i>图标</el-menu-item>
					<el-menu-item index="button"><i class="el-icon-menu"></i>按钮</el-menu-item>
				</el-submenu>
				<el-submenu index="form">
					<template slot="title">
						<i class="ivu-icon-android-checkmark-circle f-size-20"></i>
						<span>表单元素</span>
					</template>
					<el-menu-item index="Radio"><i class="el-icon-menu"></i>单选框
					</el-menu-item>
					<el-menu-item index="Checkbox"><i class="el-icon-menu"></i>多选框
					</el-menu-item>
					<el-menu-item index="input"><i class="el-icon-menu"></i>输入框
					</el-menu-item>
					<el-menu-item index="input_number"><i class="el-icon-menu"></i>计数器
					</el-menu-item>
					<el-menu-item index="select"><i class="el-icon-menu"></i>选择器
					</el-menu-item>
					<el-menu-item index="cascader"><i class="el-icon-menu"></i>级联选择器
					</el-menu-item>
					<el-menu-item index="switch"><i class="el-icon-menu"></i>开关
					</el-menu-item>
					<el-menu-item index="slider"><i class="el-icon-menu"></i>滑块
					</el-menu-item>
					<el-menu-item index="time_picker"><i class="el-icon-menu"></i>时间选择器
					</el-menu-item>
					<el-menu-item index="date_picker"><i class="el-icon-menu"></i>日期选择器
					</el-menu-item>
					<el-menu-item index="datetime_picker"><i class="el-icon-menu"></i>日期时间
					</el-menu-item>
					<el-menu-item index="upload"><i class="el-icon-menu"></i>上传
					</el-menu-item>
					<el-menu-item index="rate"><i class="el-icon-menu"></i>评分
					</el-menu-item>
					<el-menu-item index="color_picker"><i class="el-icon-menu"></i>颜色选择器
					</el-menu-item>
					<el-menu-item index="transfer"><i class="el-icon-menu"></i>穿梭框
					</el-menu-item>
					<el-menu-item index="form"><i class="el-icon-menu"></i>表单
					</el-menu-item>
				</el-submenu>
			</el-menu>
		</div>
	</el-scrollbar>
</template>
<script>
	import Vue from 'vue'
	import Vuex from 'vuex'
	import ELEMENT from 'element-ui'
	Vue.use(Vuex)
	export default {
		data: function() {
			return {}
		},
		mounted: function() {

		},
		computed: {
			theme: function() {
				return this.$store.state.ELE_Theme_active.theme
			},
			activeName: function() {
				return this.$store.state.router.activeName
			},
			scrollbarClass: function() {
				return this.$store.state.toggleCollapse.isCollapsed ? 'el-menu--collapse' : 'el-w200'
			},
			asideClass: function() {
				return this.$store.state.toggleCollapse.isCollapsed ? 'el-menu--collapse' : 'el-w200'
			},
			isCollapse: function() {
				return this.$store.state.toggleCollapse.isCollapsed
			},
		},
		methods: {
			handleOpen: function(key, keyPath) {
				var _this = this;
				setTimeout(function() {
					_this.$refs.scrollbar.update()
				}, 300)
			},
			handleClose: function(key, keyPath) {
				var _this = this;
				setTimeout(function() {
					_this.$refs.scrollbar.update()
				}, 300)
			}
		}
	}
</script>
<style>
	.el-scrollbar__view,
	.el-aside,
	.el-scrollbar {
		height: 100%;
	}
	
	.el-w200 {
		width: 200px !important;
	}
	
	.el-menu--collapse .el-submenu .el-menu {
		max-height: 300px;
		overflow-y: auto;
	}
	
	.el-menu--collapse .el-submenu .el-menu-item:focus,
	.el-menu--collapse .el-submenu .el-menu-item:hover {
		background-color: #FFFFFF !important;
		color: #2196F3;
	}
	
	.el-menu--collapse .el-submenu .el-menu-item:hover i,
	.el-menu--collapse .el-submenu .el-menu-item.is-active i {
		color: #2196F3;
	}
	
	.el-menu--collapse .el-submenu .el-menu-item {
		color: #303133;
	}
	
	.el-menu--collapse .el-submenu .el-menu-item i {
		color: #303133;
	}
	
	.el-menu--collapse .el-submenu .el-menu-item.is-active {
		color: #2196F3 !important;
		background-color: #ecf5ff !important;
	}
	
	.el-menu--collapse {
		width: 64px !important;
		overflow: visible !important;
		transition: all .3s ease;
	}
	
	.el-menu--collapse .el-scrollbar__wrap {
		overflow: visible !important;
		height: 100%;
	}
	
	.el-menu--collapse .el-submenu .el-menu {
		background-color: #ffffff;
	}
	
	.ivu-layout-sider-collapsed .el-submenu .el-menu-item {
		height: 44px;
		line-height: 44px;
	}
	
	.ivu-layout-sider-collapsed .el-menu-item i,
	.ivu-layout-sider-collapsed .el-submenu__title i {
		font-size: 24px;
		margin-left: 4px !important;
	}
	
	.el-submenu .el-menu-item {
		padding: 0 48px !important;
	}
	
	.ivu-layout-sider-collapsed .el-submenu ul.el-menu .el-menu-item i,
	.ivu-layout-sider-collapsed .el-submenu ul.el-menu .el-submenu__title i {
		font-size: 18px;
		margin-left: 4px !important;
	}
</style>