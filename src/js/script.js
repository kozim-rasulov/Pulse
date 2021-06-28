// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         /* adaptiveHeight: true, */
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                   dots: true,
//                   arrows: false
//                 }
//             }
//         ]
//       });
//   });                            /* Slick-slider */
          
const slider = tns({                                                              /* Tiny-slider start */
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    speed: 1200,

    responsive: {
        575: {
          edgePadding: 20,
          gutter: 20,
          items: 1,
        },
        767: {
          gutter: 30
        },
        991: {
          items: 1,
        },
        1200: {
          items: 1
        }
      }
});
  document.querySelector('.prev').addEventListener ('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener ('click', function () {
    slider.goTo('next');
  });                                                                       /* Tiny-slider end */
    


  $(document).ready(function(){
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });










document.querySelector('.prev').addEventListener ('click', function () {
    slider.goTo('prev');
});