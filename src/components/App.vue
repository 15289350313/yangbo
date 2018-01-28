<template>
	<el-container style="height: 100%;">
		<el-aside style="width: inherit;">
			<vue-left></vue-left>
		</el-aside>
		<el-container>
			<el-header class="layout-header">
				<vue-head></vue-head>
			</el-header>
			<el-scrollbar ref="Scrollbar" style="height: 100%;">
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-scrollbar>
		</el-container>
	</el-container>
</template>
<script>
	import Vue from 'vue'
	import Router from 'vue-router'
	import VueResource from 'vue-resource'
	import store from '@/assets/js/store'
	import ELEMENT from 'element-ui'
	import axios from 'axios'
	import httpRequest from '@/assets/js/httpRequest'
	Vue.use(VueResource)
	Vue.use(ELEMENT)
	export default {
		mounted: function() {},
		computed: {

		},
		watch: {
			$route(to, from) {
				//左侧导航状态与顶部导航面包屑
				store.dispatch("router_routername", to.meta.title);
				store.dispatch("router_routerNameEn", to.meta.openNames);
				store.dispatch("router_activeName", to.meta.activeName);
				this.scrollTo();
			}
		},
		mounted() {
			//左侧导航状态与顶部导航面包屑
			store.dispatch("router_routername", this.$route.meta.title);
			store.dispatch("router_routerNameEn", this.$route.meta.openNames);
			store.dispatch("router_activeName", this.$route.meta.activeName);
			this.scrollTo();
		},
		methods: {
			//处理内容区域导航条切换时候Y轴滚动位置0
			scrollTo() {
				var _this = this;
				setTimeout(function() {
					_this.$refs.Scrollbar.$refs.wrap.scrollTop = 0;
					_this.$refs.Scrollbar.sizeHeight = (_this.$refs.Scrollbar.$refs.wrap.clientHeight / _this.$refs.Scrollbar.$refs.wrap.scrollHeight) * 100 + '%';
				}, 0)
			}
		},
		components: {
			'vueLeft': function(resolve) {
				resolve(require('@/components/common/left.vue'))
			},
			'vueHead': function(resolve) {
				resolve(require('@/components/common/head.vue'))
			}
		}
	}
</script>
<style scoped>
	.layout-header {
		background: #fff;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
		position: relative;
		z-index: 100;
		flex: 0 0 auto;
		height: 64px;
	}
	
	.layout-header {
		background: #fff;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
		position: relative;
		z-index: 100;
	}
</style>