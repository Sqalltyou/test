$(function(){
	$('.prev,.next').hover(
		function(){
			$(this).css("opacity",1);
			},
		function(){
			$(this).css("opacity",0.5);
			}
	);
	////////////////
	img_total = $(".slidebox ol li").length;
	
	$(".next,.next_l").click(function(){
			n++;
		if(n > img_total){
				n = 1;
		};
		my_animate();	
	});
	////////////
	$(".prev,.prev_l").click(function(){
			n--;
		if(n < 1){
				n = 7;
		};
		my_animate();	
	});
	///////////
	function my_animate(){
		$('.slidebox ol').animate({left:"-"+img_width * (n-1)+"px"},500);
		
		$('.little>li').each(function(index, element) {
  		if((index+1)==n){
				$(element).addClass('active');
			}else{
				$(this).removeClass('active')
			}
	});
	};
	//////////////////////
	$('.little>li').bind('click',function(){
		n = $(this).index()+1;
		my_animate();
	});
	///////////////
	$('.little>li').eq(0).addClass('active');
	
	/////////////////
	
	// $(".B_content ul .menu1").hover(
	// 	function(){
	// 		$(this).css('background',"url(images/bgg.png)")	
	// 	},
	// 	function(){
	// 		$(this).css('background',"url(images/index_nav01.png)")
	// 	}
	// );
	// $(".B_content ul .menu2").hover(
	// 	function(){
	// 		$(this).css('background',"url(images/bgg.png)")	
	// 	},
	// 	function(){
	// 		$(this).css('background',"url(images/index_nav02.png)")
	// 	}
	// );
	// $(".B_content ul .menu3").hover(
	// 	function(){
	// 		$(this).css('background',"url(images/bgg.png)")	
	// 	},
	// 	function(){
	// 		$(this).css('background',"url(images/index_nav03.png)")
	// 	}
	// );
	// $(".B_content ul .menu4").hover(
	// 	function(){
	// 		$(this).css('background',"url(images/bgg.png)")	
	// 	},
	// 	function(){
	// 		$(this).css('background',"url(images/index_nav04.png)")
	// 	}
	// );
});
	var img_width = 823;
	var n = 1;
	var img_total = 0;