$(function(){

    $('.gnb > li').mouseenter(function(){
        $(this).find('.depth02').stop().slideDown();
    });
    $('.gnb > li').mouseleave(function(){
        $('.depth02').stop().slideUp();
    });

});//script end