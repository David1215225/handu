require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"list" : "list"
	}
})
require(["jquery","cookie","list"],function($,cookie,list){
	$(function(){
		$(".top").load("top.html",function(){
			list.list()
		})
		$("footer").load("bottom.html");
	})
})
