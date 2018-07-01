$(document).ready(function(){
	var pos = 0;
	$.get("https://mhw-app-article.mhwco.org/list/list.txt",function(data,status){
		var list=data.split("\r\n");
		if(list.length<=20){
			for(var i=0;i<list.length;i++){
				var x=list[i];
				$("#t").load("https://mhw-app-article.mhwco.org/article/"+x+"/manifest.json");
				
			}
		}
	});
})