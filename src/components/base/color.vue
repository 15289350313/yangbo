<el-row class="[$scoped]">
	<el-col :span="24">
		<div class="i-col-sm-12">
			<div class="panel panel-default">
				<div class="panel-heading">背景色</div>
				<div class="panel-body">
					<row>
						<el-col xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-for="item in bgcolor">
							<div class="align-items-center color1" :class="item" :style="style">{{item}}</div>
						</el-col>
					</row>
				</div>
			</div>

		</div>
	</el-col>
	<el-col :span="24">
		<div class="i-col-sm-12">
			<div class="panel panel-default">
				<div class="panel-heading">字体色</div>
				<div class="panel-body">
					<row>
						<el-col xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-for="item in fontcolor">
							<div class="align-items-center" :class="item" :style="style">{{item}}</div>
						</el-col>
					</row>
				</div>
			</div>

		</div>
	</el-col>
</el-row>
<script>
	export = {
		data: function() {
			return {
				style: {
					height: '50px',
					marginBottom: '0'
				},
			}
		},
		mounted: function() {
			
		},
		computed: {
			bgcolor:function(){
				var _bgcolor = [];
				for(var i=1;i<=21;i++){
					var bgcolor = i==11||i==13?'color9 bgcolor'+i:'bgcolor'+i;
					_bgcolor.push(bgcolor);
				}
				return _bgcolor;
			},
			fontcolor:function(){
				var _fontcolor = [];
				for(var i=1;i<=12;i++){
					_fontcolor.push('color'+i);
				}
				return _fontcolor;
			}
		},
		methods: {}
	}
</script>
<style></style>