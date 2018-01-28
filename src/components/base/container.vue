<el-row class="[$scoped]" :gutter="20">
	<el-col :span="12">
		<div class="panel panel-default">
			<div class="panel-heading">布局1</div>
			<div class="panel-body row-bg">
				<el-container style="height: 260px;">
					<el-header>Header</el-header>
					<el-main>Main</el-main>
				</el-container>
			</div>
		</div>
	</el-col>

	<el-col :span="12">
		<div class="panel panel-default">
			<div class="panel-heading">布局2</div>
			<div class="panel-body row-bg">
				<el-container style="height: 260px;">
					<el-aside width="80px">Aside</el-aside>
					<el-main>Main</el-main>
				</el-container>
			</div>
		</div>
	</el-col>

	<el-col :span="12">
		<div class="panel panel-default">
			<div class="panel-heading">布局3</div>
			<div class="panel-body row-bg">
				<el-container style="height: 260px;">
					<el-header>Header</el-header>
					<el-container>
						<el-aside width="80px">Aside</el-aside>
						<el-main>Main</el-main>
					</el-container>
				</el-container>
			</div>
		</div>
	</el-col>

	<el-col :span="12">
		<div class="panel panel-default">
			<div class="panel-heading">布局4</div>
			<div class="panel-body row-bg">
				<el-container style="height: 260px;">
					<el-header>Header</el-header>
					<el-container>
						<el-aside width="80px">Aside</el-aside>
						<el-container>
							<el-main>Main</el-main>
							<el-footer>Footer</el-footer>
						</el-container>
					</el-container>
				</el-container>
			</div>
		</div>
	</el-col>

	<el-col :span="12">
		<div class="panel panel-default">
			<div class="panel-heading">布局5</div>
			<div class="panel-body row-bg">
				<el-container style="height: 260px;">
					<el-aside width="80px">Aside</el-aside>
					<el-container>
						<el-header>Header</el-header>
						<el-main>Main</el-main>
					</el-container>
				</el-container>
			</div>
		</div>
	</el-col>

	<el-col :span="12">
		<div class="panel panel-default">
			<div class="panel-heading">布局6</div>
			<div class="panel-body row-bg">
				<el-container style="height: 260px;">
					<el-aside width="80px">Aside</el-aside>
					<el-container>
						<el-header>Header</el-header>
						<el-main>Main</el-main>
						<el-footer>Footer</el-footer>
					</el-container>
				</el-container>
			</div>
		</div>
	</el-col>
</el-row>
<script>
	export = {}
</script>
<style>
	.[$scoped] .el-header,
	.[$scoped] .el-footer {
		background-color: #B3C0D1;
		color: #333;
		display: flex;
    align-items: center;
    justify-content: center;
	}
	
	.[$scoped] .el-aside {
		background-color: #D3DCE6;
		color: #333;
		display: flex;
    align-items: center;
    justify-content: center;
	}
	
	.[$scoped] .el-main {
		background-color: #E9EEF3;
		color: #333;
		display: flex;
    align-items: center;
    justify-content: center;
	}
	
	.[$scoped] .el-container:nth-child(5) .el-aside,
	.[$scoped] .el-container:nth-child(6) .el-aside {
		line-height:  inherit;
	}
	
	.[$scoped] .el-container:nth-child(7) .el-aside {
		line-height:  inherit;
	}
</style>