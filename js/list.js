define(function(){
	function list(){
		$(".siteMenuA").mouseover(function(){
			$(".siteMenu").css("display","block");
		}).mouseleave(function(){
			$(".siteMenu").css("display","none");
		})
	}
	return {
		list : list
	}
})