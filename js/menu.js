var menuFlag = 0;
var subMenuFlag = 0;

$(".navbar-toggler").click(function(){
    if(!menuFlag){
        $(".social").css("width", "74%");
        menuFlag = 1;
    }
    else{
        $(".social").css("width", "100%");
        menuFlag = 0;
    }
});

if($(window).width() <= "800px"){
   $(".nav-item").unbind("mouseenter mouseleave");
    $(".nav-item").click(function(e){
            if(!subMenuFlag){
                e.preventDefault();
                $(this > ".submenu").css("display", "block");
                subMenuFlag = 1;
            }
            else{
                subMenuFlag = 0;
                $(this > ".submenu").css("display", "none");
            }
    });
}