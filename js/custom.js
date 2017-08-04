(function ($) {

    "use strict";

        // PRE loader
        // $(window).load(function(){
        //   $('.preloader').fadeOut(1000); // set duration in brackets    
        // });


        //Navigation Section
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $(window).scroll(function() {
          if ($(".navbar").offset().top > 50) {
            $(".fixed-top").addClass("top-nav");
              } else {
                $(".fixed-top").removeClass("top-nav");
              }
        });


 


$('body').scrollspy({ target: '.navbar-collapse' })



//  $('.element').typed({
// strings:["First sentencr", "Second sentence"],
//         typespeed: 0

//       });

  


        //wow animation JS
        
 new WOW({mobile:true}).init();


})(jQuery);
