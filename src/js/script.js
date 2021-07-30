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
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });



                  /* Контентная часть таба - вариант №1 */
    // $('.catalog-item__link').each(function(i) {
    //   $(this).on('click', function(e) {
    //     e.preventDefault();
    //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //   })
    // });

    // $('.catalog-item__back').each(function(i) {
    //   $(this).on('click', function(e) {
    //     e.preventDefault();
    //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //   })
    // });

                  /* Контентная часть таба - вариант №2 - оптимизированный */
                  
    function toggleSlide(item) {      /* Item */
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    /* Modal */

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });


    
    /* $('.button_mini').on('click',function() {
        $('.overlay, #order').fadeIn();
    }); */

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        });
    });
    

    /* Валидация форм */

    /* $('#consultation-form').validate(); */

    /* Валидируем одну форму, после создадим оптимизированный вариант*/

    /* $('#consultation form').validate( {
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, укажите ваше имя",
          minlength: jQuery.validator.format("Введите не менее {0} символов")
        },
        phone: "Пожалуйста, укажите ваш номер телефона",
        email: {
          required: "Пожалуйста, укажите вашу почту",
          email: "Неправильно введён адрес эл-почты"
        }
      }
    }); */

    /* $('#order form').validate(); */


    /* оптимизированная валидация формы */
    function valideForms(form){
      $(form).validate( {
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "Пожалуйста, укажите ваше имя",
            minlength: jQuery.validator.format("Введите не менее {0} символов")
          },
          phone: "Пожалуйста, укажите ваш номер телефона",
          email: {
            required: "Пожалуйста, укажите вашу почту",
            email: "Неправильно введён адрес эл-почты"
          }
        }
      });
    };
    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');


    /* Маска ввода номера на сайте */
    $('input[name=phone]').mask("+999 (99) 999-99-99");


    /* PHP */

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
      });
      return false;
    });


    /* Smooth scroll and page-up */
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1200) {
          $('.page-up').fadeIn();
      } else {
          $('.page-up').fadeOut();
      }
    });

    $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });


    /* wow min js */
    new WOW().init();
  });