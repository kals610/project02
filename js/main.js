$(function(){
	var goPage;
	var topPos;
	var t=0;
	var n=0;
	var num=1;
	var link=""; 
	var firstFlag=false;

	$("#gnb li").eq(n).find("a").addClass("on");

	setTimeout(function(){
		$("html").animate({scrollTop: 0},800, function(){
			firstFlag=true;
			$("#business").removeClass("active");
			$(window).trigger("scroll");
		});
	}, 10);



	$(window).scroll(function(){
		if(firstFlag == false){
			return;
		}
		t=$(window).scrollTop();

		if(t < $("#business").offset().top-200){
			n=0; // 1
		}
		else if(t < $("#portfolio").offset().top-200){
			n=1; // 2

		}
		else if(t < $("#culture").offset().top-200){
			n=2; // 3
			$("#portfolio").addClass("active");
		}
		else if(t < $("#awards").offset().top-200){
			n=3; // 4
			$("#culture").addClass("active");
		}
		else if(t < $("#contact").offset().top-200){
			n=4; // 5
			$("#awards").addClass("active");

			if(n == $(window).height() - $("#contact").offset().top-200){
				$("#contact").addClass("active");
			}
		}
		else{
			n=5; // 6
		}
		// console.log(n);

		if(n == 0){
			$("#header").addClass("active")
			$(".btn_top").removeClass("active");
			$(".menu_zone").removeClass("active");
		}
		else{
			$("section").eq(n-1).addClass("active");

			if(n >= 1){
				$(".btn_top").addClass("active");
				$(".menu_zone").addClass("active");
				$("#business").addClass("active");
			}
			else{
				$(".btn_top").removeClass("active");
				$(".menu_zone").removeClass("active");
			}
		}

		$("#gnb a").removeClass("on");
		$("#gnb li").eq(n).find("a").addClass("on");
		});

		$(".btn_top").click(function(e){
			e.preventDefault();
			$("html").animate({scrollTop:0}, 400, function(){
				$(window).scrollTop(0);
			});
		});

	$("#gnb > ul > li > a").click(function(){
		link=$(this).attr("href");
		$("body, html").animate({scrollTop:$(link).offset().top}, 400);

		num=$(this).parent().index()+1;

		return false;
	});



	//  모바일 메뉴 탭
	$(".tab").click(function(e){
		e.preventDefault();
		$("body").toggleClass("static");
		$(".mobile").toggleClass("active");
		$(".tab").toggleClass("active");
		$(".dim").toggleClass("active");
	});
	$(".dim").click(function(){
		$("body").removeClass("static");
		$(".mobile").removeClass("active");
		$(".tab").removeClass("active");
		$(".dim").removeClass("active");
	});

	var w;
	var h;
	$(window).resize(function(){
		w=$(window).width();
		if(w > 720){
			if($(".mobile").hasClass("active")){
				$(".dim").trigger("click");
			}
		}

	});
	$(window).trigger("resize");


});
