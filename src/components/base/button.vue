<el-row class="[$scoped]" :gutter="20">
	<el-col :span="24">
		<div class="panel panel-default">
			<div class="panel-heading">按钮风格</div>
			<div class="panel-body">
				<div class="margin-b-20">
					<el-button size="small" plain>默认按钮</el-button>
					<el-button size="small" type="primary">主要按钮</el-button>
					<el-button size="small" type="success">成功按钮</el-button>
					<el-button size="small" type="info">信息按钮</el-button>
					<el-button size="small" type="warning">警告按钮</el-button>
					<el-button size="small" type="danger">危险按钮</el-button>
				</div>

				<div>
					<el-button size="small" plain round>圆形按钮</el-button>
					<el-button size="small" type="primary" round>主要按钮</el-button>
					<el-button size="small" type="success" round>成功按钮</el-button>
					<el-button size="small" type="info" round>信息按钮</el-button>
					<el-button size="small" type="warning" round>警告按钮</el-button>
					<el-button size="small" type="danger" round>危险按钮</el-button>
				</div>
			</div>
		</div>
	</el-col>

	<el-col :span="24">
		<div class="panel panel-default">
			<div class="panel-heading">禁用状态</div>
			<div class="panel-body">
				<el-button size="small" disabled>默认按钮</el-button>
				<el-button size="small" type="primary" disabled>主要按钮</el-button>
				<el-button size="small" type="success" disabled>成功按钮</el-button>
				<el-button size="small" type="info" disabled>信息按钮</el-button>
				<el-button size="small" type="warning" disabled>警告按钮</el-button>
				<el-button size="small" type="danger" disabled>危险按钮</el-button>
			</div>
		</div>
	</el-col>

	<el-col :span="24">
		<div class="panel panel-default">
			<div class="panel-heading">文字按钮</div>
			<div class="panel-body">
				<el-button type="text">文字按钮</el-button>
				<el-button type="text" disabled>文字按钮</el-button>
			</div>
		</div>
	</el-col>

	<el-col :span="24">
		<div class="panel panel-default">
			<div class="panel-heading">图标按钮</div>
			<div class="panel-body">
				<el-button type="primary" icon="el-icon-edit"></el-button>
				<el-button type="primary" icon="el-icon-share"></el-button>
				<el-button type="primary" icon="el-icon-delete"></el-button>
				<el-button type="primary" icon="el-icon-search">搜索</el-button>
				<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>

			</div>
		</div>
	</el-col>

	<el-col :span="24">
		<div class="panel panel-default">
			<div class="panel-heading">按钮组</div>
			<div class="panel-body">
				<el-button-group>
					<el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
					<el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
				</el-button-group>
				<el-button-group>
					<el-button type="primary" icon="el-icon-edit"></el-button>
					<el-button type="primary" icon="el-icon-share"></el-button>
					<el-button type="primary" icon="el-icon-delete"></el-button>
				</el-button-group>

			</div>
		</div>
	</el-col>

	<el-col :span="24">
		<div class="panel panel-default">
			<div class="panel-heading">加载中</div>
			<div class="panel-body">
				<el-button type="primary" :loading="true">加载中</el-button>
				<el-button type="primary" :loading="loading" @click="submit">提交</el-button>
			</div>
		</div>
	</el-col>

	<el-col :span="24">
		<div class="panel panel-default">
			<div class="panel-heading">不同尺寸</div>
			<div class="panel-body">
				<div>
					<el-button>默认按钮</el-button>
					<el-button size="medium">中等按钮</el-button>
					<el-button size="small">小型按钮</el-button>
					<el-button size="mini">超小按钮</el-button>
				</div>
				<div style="margin-top: 20px">
					<el-button round>默认按钮</el-button>
					<el-button size="medium" round>中等按钮</el-button>
					<el-button size="small" round>小型按钮</el-button>
					<el-button size="mini" round>超小按钮</el-button>
				</div>
			</div>
		</div>
	</el-col>

</el-row>
<script>
	export = {
		data: function() {
			return {
				loading: false,
			}
		},
		computed: {},
		methods:{
			submit:function(){
				var _this = this;
				_this.loading = true;
				setTimeout(function(){
					_this.loading = false;
				},2000)
			}
		}
	}
</script>
<style>

</style>