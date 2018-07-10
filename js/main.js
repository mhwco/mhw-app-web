var atsroot="https://mhw-app-article.mhwco.org/";
function addcard(title,detail,img,author,avatar,date,href){
	"use strict";
	$("#content").append('<div class="card" onclick="location.href=\''+href+'\'"><div class="title-bar"><img class="avator" alt="作者头像" src="'+avatar+'"/><span class="author">'+author+'</span><span class="date">'+date+'</span></div><img class="article-img" alt="我是文章缩略图" src="'+img+'"/><h2 class="article-title">'+title+'</h2><div class="article-detail">'+detail+'</div></div></a>');
}
function jsonParse(path,isCard){//向文章列表增加卡片
	"use strict";
	$.get(path+"manifest.json",function(mf){
		if(isCard){
			addcard(mf.title,mf.detail,mf.image,mf.author,atsroot+"avatar/"+mf.author+".png",mf.date,path+"index.html");
		}else{
			
		}
	});
}
function jsonMapping(liststring,isCard){//分割list字符串并分别get
	"use strict";
	var list=liststring.split("\r\n");
	var t=list.length<3?list.length:3;
	for(var i=0;i<t;i++){
		var x=list[i];
		jsonParse(atsroot+"article/"+x+"/",isCard);
	}
}
$(document).ready(function(){
	"use strict";
	$.get(atsroot+"list/list.txt",function(data){
		jsonMapping(data,true);
	});
});