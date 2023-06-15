$(function(){
    let total=$(".vi_slide li").length;
    let i=0;
    let wid=100;

    setInterval(function(){
        i++;
        if(i==total-1){
            $(".vi_slide").stop().animate({left:"-400%"}, function(){
                $(".vi_slide").css({left:"0px"})
            });
            i=0;
        }else{
            $(".vi_slide").stop().animate({left:-i*wid+"%"});
        }
    },3000);
   
    /*메뉴*/
    $(".menu").on("mouseenter",function(){
        $(".header-hidden").stop().animate({top:"0px"});
    });

    $(".menu-hidden").on("mouseleave",function(){
        $(".header-hidden").stop().animate({top:"-450px"})
    });

    /*모바일/테블릿 메뉴*/

    $(".mobile-menu").on("click",function(){
        $(".mobile_menu_wrap").stop().animate({right:"0px"});
        
    });

    $(".close").on("click", function(){
        $(".mobile_menu_wrap").stop().animate({right:"-320px"});
    });
    let b=0;
    $(".mobile_menu_box li").on("click",function(){
        if(b==0){
            $(this).children(".mobile_hidden_menu").css({display:"block"});
            a=$(this).index();
            $(".mobile_menu_box li .up").eq(a-1).css({opacity:1});
            $(".mobile_menu_box li .down").eq(a-1).css({opacity:0});
            b=1;
        }else{
            $(this).children(".mobile_hidden_menu").css({display:"none"});
            a=$(this).index();
            $(".mobile_menu_box li .up").eq(a-1).css({opacity:0});
            $(".mobile_menu_box li .down").eq(a-1).css({opacity:1});
            b=0;
        }
        
    })

    /*카테고리 메뉴*/
    let k
    $(".category_btn li").on("click",function(){
        k=$(this).index();
        $(".category_btn li").removeClass("on");
        $(".category_btn li").eq(k).addClass("on"); 
        $(".category_bg li").stop().fadeOut();
        $(".category_bg li").eq(k).stop().fadeIn();
        $(".right_page").removeClass("on")
        $(".right_page").eq(k).addClass("on");
        $(".category_image li").removeClass("on");
        $(".category_image li").eq(k).addClass("on");
       
    });

    /*news&event*/
    $(".event li").on("mouseenter", function(){
        s=$(this).index();
        $(".poster").eq(s).stop().animate({opacity:1});
    });
    $(".event li").on("mouseleave", function(){
        s=$(this).index();
        $(".poster").eq(s).stop().animate({opacity:0});
    });
    
    /*top버튼*/
    document
    .querySelector(".totop")
    .addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

});