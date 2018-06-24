$(document).ready(function(){
	var list;
	$.get("https://mhw-app-article.mhwco.org/list/list.txt",function(data,status){
		list=data.split("\n");
	});
	$("#content").append("
})