$(function(){
    //初始化菜单的宽高
    var clientW=$(window).width();
    var clientH=$(window).height();
    $(".son").css({
        width:clientW,
        height:clientH
    })

    $(".menu").click(function(){
        $(".son").slideToggle(300);
    })
})