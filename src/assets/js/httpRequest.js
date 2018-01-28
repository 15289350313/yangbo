import $ from 'jquery'
import router from '../../router'
import axios from 'axios'
import store from '../../store'

function httpRequest() {}
//验证是否登录
httpRequest.prototype.getUserAccount = function() {
	console.log('验证是否登录');
	console.log(localStorage.userName);
	if(localStorage.userName) {
		if(localStorage.userName != store.state.ELE_User.userName) {
			router.push({
				path: 'login'
			})
		}
	} else {
		router.push({
			path: 'login'
		})
	}
}
//验证是否登录
httpRequest.prototype.getUserAccountYes = function() {
	//如果存在则跳转至index
	if(localStorage.userName == store.state.ELE_User.userName) {
		router.push({
			path: 'index'
		})
	}
}
//获取用户权限
httpRequest.prototype.getUserPermissions = function() {
	/*axios.get('/echarts/examples/data/asset/data/lines-bus.json').then(function(response) {
			console.log('获取用户权限');
			//console.log(response);
			return response;
		})
		.catch(function(error) {
			console.log(error);
		});*/
}

/*httpRequest.prototype.httpRequestInit = function() {
	this.getUserAccount();
	this.getUserPermissions();
}*/

export default new httpRequest();