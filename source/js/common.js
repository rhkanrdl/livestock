$(function () {



    var windowh = $(window).height();
    var windowW = $(window).width();


    $(window).on("resize", function(){
        
        windowh = $(window).height();
        windowW = $(window).width();
        

    });




    $('.left-scroller').niceScroll({
        emulatetouch:true
      });

    $('.right-scroller').niceScroll({
        emulatetouch:true
    });


    $('div.output').niceScroll({
        emulatetouch:true
    });
      
});
