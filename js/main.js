function addcard(title,detail,img,author,avator,date){
	"use strict";
	$("#content").append('<div class="card"><div class="title-bar"><img class="avator" alt="作者头像" src="'+avator+'"/><span class="author">'+author+'</span><span class="date">'+date+'</span></div><img class="article-img" alt="我是文章缩略图" src="'+img+'"/><h2 class="article-title">'+title+'</h2><div class="article-detail">'+detail+'</div></div>');
}
$(document).ready(function(){
	"use strict";
	/*addcard("test","testtest","https://www.mhwco.org/image/mhwco-logo/mhwco.svg","root","https://www.mhwco.org/image/mhwco-logo/mhwco-min.svg","1970-1-1");*/
	$("#t").load("https://mhw-app-article.mhwco.org/list/list.txt");
	
});