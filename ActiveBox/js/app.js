$(function() {
    /*Fixed header */
    let header = $("#header");
    let intro =$("#intro");
    let introH =intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav =$("#nav");
    let navToggle =$("#nav");

    checkScroll(scrollPos,introH);

    $(window).on("scroll  resize",function(){
        let introH = intro.innerHeight();
        scrollPos =$(this).scrollTop();
           
        

        checkScroll(scrollPos,introH);
    });

    function checkScroll() {
        if(scrollPos > introH ) {
            header.addClass("fixed");
         } else {
            header.removeClass("fixed");
         }
    }

    /*Smooth scroll */

    $("[data-scroll]").on("click",function(event){
        event.preventDefault();
        let elementid =$(this).data('scroll');
        let elementOffset =$(elementid).offset().top;
        
        nav.removeClass("show");


        $("html,body").animate({
          scrollTop:elementOffset -60
        }, 700);

    });

    /*Nav Toggle */
    
    $("#navToggle").on("click",function(event) {
        event.preventDefault();
        nav.toggleClass("show");

    })

    /*Reviews https://kenwheeler.github.io/slick/ */
    let slider = $("#reviewsSlider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
      });
  
      $(document).ready(function(){
        $('.slider').slick({
            speed: 1000,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>' 
        });     
      });

      $(document).ready(function(){
        $('.logocompany__inner').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 600,
            prevArrow: '<button type="button" class="slick-prev "></button>',
            nextArrow: '<button type="button" class="slick-next "></button>'
        });     
      });

});