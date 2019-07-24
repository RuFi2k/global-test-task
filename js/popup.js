$(".question").click(function(e){
    e.preventDefault();
    $(".b-popup").css("display", "flex");
    $(".popup").fadeIn(300,function(){$(this).focus();});
});

$(".b-popup").click(function(e){
    if(e.target == this){
        $(".popup").fadeOut(300);
        $(this).hide();
    }
});