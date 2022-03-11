$(function(){
    $('.banner-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
      });
      /*About Slick Slider  Start*/
       $('.about-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
         
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
         
            }
          }
         
         
        ]
      });
     /*About Slick Slider End */ 
      /*Counter Up Slider Start */      

   $( '.counter') .counterUp({
   delay:10,
   time:2500,
   }

   )
   /*==Comment part Slick Slider Start== */
   $('.main-comment').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  })
  /*===Comment part Slick Slider End === */ 

  /*===Team part Slick Slider Start === */

   $('.team-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
     
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
     
        }
      }
    ]
  })
  


    /*===Team part Slick Slider End === */

  $(window).scroll(function(){
    var top = $ (this) .scrollTop ()
    if ( top > 300){
      $(".navbar").addClass("sticky-menu")
    }
    else {
      $(".navbar").removeClass("sticky-menu")
    }
  }
    )
    /*== Animation == */
  $(".back-to-top").click(function(){
    $("html,body").animate({scrollTop: 0},1000)
  }

  )
  /*==Venibox == */
  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
  });
   new VenoBox({
    selector: '.my-video-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
  });

  $('.nav-toggle').click(function() {
		$(this).toggleClass('active');
	});


  /*===Scroll Spy Start=== */ 
  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 40
    }, 1000);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 40;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
   /*===Scroll Spy Start=== */
}
    )


  