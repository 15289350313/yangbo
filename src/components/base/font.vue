<el-row class="[$scoped]" :gutter="20">
	

	<el-col :span="24">
		<div class="panel panel-default">
			<div class="panel-heading">字体大小</div>
			<div class="panel-body" style="height:350px">
				<el-row  :gutter="20">
					<el-col :span="6"  v-for="item in fontJson">
						<div class="grid-content bgcolor12 align-items-center color10">{{item}}</div>
					</el-col>
				</el-row>
			</div>
		</div>
	</el-col>
	
	<el-col :span="24">
		<div class="panel panel-default">
			<div class="panel-heading">h1-h5</div>
			<div class="panel-body" style="height:350px">
				<div class="same-margin">
					<h1>
									This is sample title
									<br>
									<small>Secondary text</small>
								</h1>

					<h2>
									This is sample title
									<br>
									<small>Secondary text</small>
								</h2>

					<h3>
									This is sample title
									<br>
									<small>Secondary text</small>
								</h3>

					<h4>
									This is sample title
									<br>
									<small>Secondary text</small>
								</h4>

					<h5>
									This is sample title
									<br>
									<small>Secondary text</small>
								</h5>
				</div>

			</div>
		</div>
	</el-col>
</el-row>
<script>
	export = {
		computed: {
			fontJson:function(){
				var _bgcolor = [];
				for(var i=10;i<=32;i++){
					_bgcolor.push('f-size-'+i);
				}
				return _bgcolor;
			}
		},
	}
</script>
<style>
	.[$scoped] .panel-body .el-col .grid-content {
		min-height: 36px;
		margin-bottom: 20px;
	}
</style>