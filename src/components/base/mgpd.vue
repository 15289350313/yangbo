<el-row class="[$scoped]" :gutter="20">
	<el-col :span="12">
		<div class="panel panel-default">
			<div class="panel-heading">padding | margin</div>
			<div class="panel-body" style="height:290px">
				<el-row  :gutter="20">
					<el-col :span="8"  v-for="item in padding">
						<div class="grid-content bgcolor12 align-items-center color10"  v-html="item"></div>
					</el-col>
				</el-row>
			</div>
		</div>
	</el-col>
	<el-col :span="12">
		<div class="panel panel-default">
			<div class="panel-heading">padding-r | margin-r</div>
			<div class="panel-body" style="height:290px">
				<el-row  :gutter="20">
					<el-col :span="8"  v-for="item in padding_r">
						<div class="grid-content bgcolor12 align-items-center color10"  v-html="item"></div>
					</el-col>
				</el-row>
			</div>
		</div>
	</el-col>
	<el-col :span="12">
		<div class="panel panel-default">
			<div class="panel-heading">padding-l | margin-l</div>
			<div class="panel-body" style="height:290px">
				<el-row  :gutter="20">
					<el-col :span="8"  v-for="item in padding_l">
						<div class="grid-content bgcolor12 align-items-center color10"  v-html="item"></div>
					</el-col>
				</el-row>
			</div>
		</div>
	</el-col>
	
	<el-col :span="12">
		<div class="panel panel-default">
			<div class="panel-heading">padding-t | margin-t</div>
			<div class="panel-body" style="height:290px">
				<el-row  :gutter="20">
					<el-col :span="8"  v-for="item in padding_t">
						<div class="grid-content bgcolor12 align-items-center color10"  v-html="item"></div>
					</el-col>
				</el-row>
			</div>
		</div>
	</el-col>
	
	<el-col :span="12">
		<div class="panel panel-default">
			<div class="panel-heading">padding-b | margin-b</div>
			<div class="panel-body" style="height:290px">
				<el-row  :gutter="20">
					<el-col :span="8"  v-for="item in padding_b">
						<div class="grid-content bgcolor12 align-items-center color10"  v-html="item"></div>
					</el-col>
				</el-row>
			</div>
		</div>
	</el-col>
	
	
</el-row>
<script>
	export = {
		computed: {
			padding:function(){
				var _arr = [];
				for(var i=0;i<=50;i++){
					if(i%5==0){
						_arr.push('padding-'+i+'<br>'+'margin-'+i);
					}
				}
				return _arr;
			},
			padding_r:function(){
				var _arr = [];
				for(var i=0;i<=50;i++){
					if(i%5==0){
						_arr.push('padding-r-'+i+'<br>'+'margin-r-'+i);
					}
				}
				return _arr;
			},
			padding_l:function(){
				var _arr = [];
				for(var i=0;i<=50;i++){
					if(i%5==0){
						_arr.push('padding-l-'+i+'<br>'+'margin-l-'+i);
					}
				}
				return _arr;
			},
			padding_t:function(){
				var _arr = [];
				for(var i=0;i<=50;i++){
					if(i%5==0){
						_arr.push('padding-t-'+i+'<br>'+'margin-t-'+i);
					}
				}
				return _arr;
			},
			padding_b:function(){
				var _arr = [];
				for(var i=0;i<=50;i++){
					if(i%5==0){
						_arr.push('padding-b-'+i+'<br>'+'margin-b-'+i);
					}
				}
				return _arr;
			}
		},
	}
</script>
<style>
	.[$scoped] .panel-body .el-col .grid-content {
		min-height: 50px;
		margin-bottom: 20px;
		font-size: 12px;
	}
</style>