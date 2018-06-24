$.get("article.md",function(data,status){
	document.write(data);
	document.write(marked(data));
})