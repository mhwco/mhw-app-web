var atsroot="https://mhw-app-article.mhwco.org/";
function addcard(title,detail,img,author,avator,date){
	"use strict";
	$("#content").append('<div class="card"><div class="title-bar"><img class="avator" alt="作者头像" src="'+avator+'"/><span class="author">'+author+'</span><span class="date">'+date+'</span></div><img class="article-img" alt="我是文章缩略图" src="'+img+'"/><h2 class="article-title">'+title+'</h2><div class="article-detail">'+detail+'</div></div>');
}
function jsonMapping(liststring){//分割list字符串并分别get
	var list=liststring.split("\r\n");
	for(var i=0;i<list.length;i++){
		list=["demo"];
		var x=list[i];
		$.get(atsroot+"article/"+x+"/manifest.json",function(data){
			alert(data);
		});
	}
}
$(document).ready(function(){
	"use strict";
	$.get(atsroot+"list/list.txt",function(data){});
});