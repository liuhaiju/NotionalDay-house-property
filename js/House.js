	$(function(){
		var index = $(".icon li.selected").index();
		function goleft(){
			if(index == 1){ index = -1}
			$(".icon li").stop(true,true).eq(index+=1).addClass("selected").siblings().removeClass("selected");
			$(".img-box li").stop(true,true).eq(index).fadeIn().siblings().fadeOut();
		}
		function goright(){
			if(index == 0) { index = 2; }
            $(".icon li").stop(true,true).eq(index-=1).addClass("selected").siblings().removeClass("selected");
            $(".img-box li").stop(true,true).eq(index).fadeIn().siblings().fadeOut();
		}
		$(".left").click(function(){
			// if(index == 1){ index = -1}
			// $(".icon li").stop(true,true).eq(index+=1).addClass("selected").siblings().removeClass("selected");
			// $(".img-box li").stop(true,true).eq(index).fadeIn().siblings().fadeOut();
			goleft();
		})
		$(".right").click(function(){
			// if(index == 0) { index = 2; }
   //          $(".icon li").stop(true,true).eq(index-=1).addClass("selected").siblings().removeClass("selected");
   //          $(".img-box li").stop(true,true).eq(index).fadeIn().siblings().fadeOut();
   			goright();
		})
		// 手动1111111111111111111111111111111111111111111111
		function exportTimer(){
			timer = setInterval(function(){
				goleft();
			},10000);
		}
		exportTimer();
		$(".left").hover(
			function(){
				clearInterval(timer)
			},
			function(){
				exportTimer();
			}
		)
		$(".right").hover(
			function(){
				clearInterval(timer)
			},
			function(){
				exportTimer();
			}
		)
		// 按时动22222222222222222
        $(".icon li").mouseover(function(){
            if(index == 0) { index = 2; }
            $(".icon li").stop(true,true).eq(index-=1).addClass("selected").siblings().removeClass("selected");
            $(".img-box li").stop(true,true).eq(index).fadeIn().siblings().fadeOut();
        })
        // 轮播已做完
        $(".news02 .s1 a").mouseover(function(){
        	$(this).addClass("cur").siblings().removeClass("cur")
        	var index = $(this).index();
        	$(".searchjt").eq(index).show().siblings().hide();
        })
        // 搜索还未完
        $(".tetit li").mouseover(function(){
		 	$(this).addClass("cmsA").siblings().removeClass("cmsA")
		 	var index = $(this).index();
            $(".tenr").eq(index).show().siblings().hide();
		})

	})