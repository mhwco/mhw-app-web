$(document).ready(function(){
	var liststr;
	$.get("https://mhw-app-article.mhwco.org/list/list.txt",function(data,status){
		liststr=data;
	});
	var list=liststr.split("\n");
})