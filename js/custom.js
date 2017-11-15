$(document).ready(function(){
	$(".main_menu li a").click(function(e){
		var id_to_go = $(this).attr("href");
		$("html,body").animate({
			scrollTop: $(id_to_go).offset().top
		},600);

	})
})