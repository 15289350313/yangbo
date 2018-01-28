function Filter() {
	//this.color = "red";
	//this.szie = 20;
}
//返回一个字符串，该字符串中的所有字母都被转化为大写字
Filter.prototype.toUpperCase = function(self){
	return self.toUpperCase()
};
//返回一个字符串，该字符串中的字母被转换为小写字母
Filter.prototype.toLowerCase = function(self){
	return self.toLowerCase()
};
//过滤字符串两边的空格
Filter.prototype.trim = function(self){
	return  $.trim(self)
};
//过滤所有制定字符
Filter.prototype.replace = function(self,str){
	var re = eval("/" + str + "/g")
	return  self.replace(re,'')
};


export default new Filter();