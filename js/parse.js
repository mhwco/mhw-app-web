alert("1")
$.get("article.md",function(data,status){
	document.write(marked(data));
})