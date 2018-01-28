<template>
	<div class="lockscreen-page height100 loginClass">
		<div class="loginbgimg"></div>
		<div class="login-container height100 align-items-center">
			<div class="row width100">
				<div class="col-sm-24">
					<el-form :model="ruleForm" action="javascript:"  @keyup.enter.native="onSubmit"  :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
						<div class="user-thumb">
							<a href="#">
								<img src="@/assets/img/user-5.png" class="img-responsive img-circle" />
							</a>
						</div>
						<div class="form-group">
							<h3 class="f-size-30 font-family-fzltxh">欢迎访问 Vue UI系统</h3>
							<div class="input-group">
								<el-popover ref="popover1" placement="bottom-start"   trigger="hover" content="感谢作者贡献密码：yangbo">
</el-popover>
								<el-form-item label-width="0px" label="" prop="name">
									<el-input  v-popover:popover1 class="logininput" placeholder="请输入密码" v-model="ruleForm.name"></el-input>
								</el-form-item>
								<span class="input-group-btn">
									<el-button class="bgcolor14" type="primary" @click="submitForm('ruleForm')">Log In</el-button>
								</span>
							</div>
						</div>
					</el-form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import router from '../../router'
	import store from '@/assets/js/store'
	export default {
		data: function() {
			return {
				ruleForm: {
					name: '',
				},
				rules: {
					name: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}]
				}
			}
		},
		mounted() {
		},
		computed: {},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						//验证用户名是否正确
						if(this.ruleForm.name == store.state.ELE_User.userName){
							//推送版本消息
							store.dispatch("ELE_message");
							//储存用户名
							localStorage.userName = this.ruleForm.name;
							router.push({ path: 'index' })
						}else{
							this.$message.error('密码错误');
						}
						
					} else {
						this.$message.error('请输入密码');
						return false;
					}
				});
			},
			onSubmit (){
				this.submitForm('ruleForm')
			}
		}
	}
</script>
<style>
	.loginClass {
		background-color: #2c2e2f;
	}
	
	.loginClass .loginbgimg {
		background: url(../../assets/img/dev2-1920.jpg);
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: .03;
	}
	
	.loginClass.lockscreen-page {
		padding-top: 0;
	}
	
	.loginClass .user-thumb {
		float: left;
		width: 100px;
		margin-left: 50px;
	}
	.loginClass .form-group {
		padding-left: 30px;
		position: relative;
		float: left;
		width: 500px;
		margin-bottom: 0;
	}
	
	.loginClass .el-form-item {
		display: table-cell;
	}
	
	.loginClass .img-responsive {
		-webkit-box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.05);
		-moz-box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.05);
		box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.05);
	}
	
	
	.loginClass .form-group .input-group {
		margin-top: 20px;
	}
	
	.loginClass .logininput .el-input__inner {
		background: rgba(0, 0, 0, 0.12);
		border: 1px solid #3e4142;
		color: #fff;
		height: 40px;
		border-radius: 0px;
	}
	
	.loginClass .input-group-btn .el-button {
		border: 1px solid rgb(45, 140, 240);
		padding: 10px 20px;
		border-radius: 0px;
		line-height: 1.42857143;
		color: #ffffff;
		background-color: transparent;
		font-size: 13px;
	}
	
	.loginClass .input-group-btn {
		padding-left: 10px;
	}
	
	.loginClass .form-group h3 {
		margin: 0;
	}
	
	.loginClass .form-group p {
		color: #979898;
		font-size: 13px;
		margin: 0;
		margin-top: 10px;
	}
</style>