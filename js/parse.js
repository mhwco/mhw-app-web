$.get("article.md",function(data,status){
	alert("1");
	document.write(data);
	document.write(marked(data));
})