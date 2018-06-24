$(document).ready(function(){
	$.get("article.md",function(data,status){
	document.write(marked(data));
	});
})