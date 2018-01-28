<template>
	<el-row class="[$scoped]" :gutter="20">
		<el-col :span="12">
			<div class="panel panel-default">
				<div class="panel-heading">基础用法</div>
				<div class="panel-body" style="height: 290px;">
					<el-row>
						<el-col :span="24">
							<div class="grid-content"></div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="12">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="12">
							<div class="grid-content "></div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="8">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="8">
							<div class="grid-content "></div>
						</el-col>
						<el-col :span="8">
							<div class="grid-content"></div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="6">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content "></div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content "></div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="4">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content "></div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content "></div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content "></div>
						</el-col>
					</el-row>
				</div>
			</div>
		</el-col>

		<el-col :span="12">
			<div class="panel panel-default">
				<div class="panel-heading">分栏间隔</div>
				<div class="panel-body" style="height: 290px;">
					<el-row :gutter="20">
						<el-col :span="24">
							<div class="grid-content"></div>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="12">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="12">
							<div class="grid-content "></div>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="6">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="12">
							<div class="grid-content "></div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content"></div>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="6">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content "></div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content "></div>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="4">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content "></div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content "></div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content "></div>
						</el-col>
					</el-row>
				</div>
			</div>
		</el-col>

		<el-col :span="12">
			<div class="panel panel-default">
				<div class="panel-heading">对齐方式</div>
				<div class="panel-body row-bg" style="height: 290px;">
					<el-row type="flex" justify="center" :gutter="20">
						<el-col :span="12">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content "></div>
						</el-col>
					</el-row>
					<el-row type="flex" justify="end" :gutter="20">
						<el-col :span="6">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content"></div>
						</el-col>
					</el-row>
					<el-row type="flex" justify="space-around" :gutter="20">
						<el-col :span="4">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content "></div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content"></div>
						</el-col>
						<el-col :span="4">
							<div class="grid-content "></div>
						</el-col>
					</el-row>
				</div>
			</div>
		</el-col>

		<el-col :span="12">
			<div class="panel panel-default">
				<div class="panel-heading">响应式布局</div>
				<div class="panel-body" style="height: 290px;">
					<el-row :gutter="20">
						<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
							<div class="grid-content"></div>
						</el-col>
						<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
							<div class="grid-content "></div>
						</el-col>
						<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
							<div class="grid-content"></div>
						</el-col>
						<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
							<div class="grid-content"></div>
						</el-col>
						<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
							<div class="grid-content "></div>
						</el-col>
						<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
							<div class="grid-content "></div>
						</el-col>
						<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
							<div class="grid-content"></div>
						</el-col>
						<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
							<div class="grid-content "></div>
						</el-col>
						<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
							<div class="grid-content "></div>
						</el-col>
					</el-row>
				</div>
			</div>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		data: function() {
			return {}
		},
		mounted: function() {

		},
		computed: {},
		methods: {}
	}
</script>
<style scoped>
	.panel-body.row-bg .el-row {
		padding-top: 20px;
		margin-bottom: 10px;
		background-color: #f9fafc;
	}
	
	.panel-body .el-col {
		margin-bottom: 20px;
	}
	
	.panel-body .el-col .grid-content {
		min-height: 36px;
		background: rgba(0, 153, 229, .7);
	}
	
	.panel-body .el-col:nth-child(odd) .grid-content {
		background: rgba(0, 153, 229, .9);
	}
</style>