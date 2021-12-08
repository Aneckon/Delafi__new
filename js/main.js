$(document).ready(function () {
  $('.menu__mob').click(function () {
    $('.menu__list').toggleClass('open__menu');
    $('.dropdown__top').toggleClass('d-block');
    $('.menu__link').toggleClass('d-none');
    $('.menu__mob').toggleClass('remove__menu');
    $('body').toggleClass('fixed');
  });
  $('.item__one').click(function () {
    $('.one').toggleClass('d-block');
    $('.item__one-header').toggleClass('menu__dropdown-active');
  });
  $('.item__two').click(function () {
    $('.two').toggleClass('d-block');
    $('.item__two-header').toggleClass('menu__dropdown-active');
  });
  $('.item__tree').click(function () {
    $('.tree').toggleClass('d-block');
    $('.item__tree-header').toggleClass('menu__dropdown-active');
  });
  $('.item__for').click(function () {
    $('.for').toggleClass('d-block');
    $('.item__for-header').toggleClass('menu__dropdown-active');
  });
  $('.item__fav').click(function () {
    $('.fav').toggleClass('d-block');
    $('.item__fav-header').toggleClass('menu__dropdown-active');
  });
  $('.item__six').click(function () {
    $('.six').toggleClass('d-block');
    $('.item__six-header').toggleClass('menu__dropdown-active');
  });
  $('.item__seven').click(function () {
    $('.seven').toggleClass('d-block');
    $('.item__seven-header').toggleClass('menu__dropdown-active');
  });
  $('.item__nain').click(function () {
    $('.nain').toggleClass('d-block');
    $('.item__nain-header').toggleClass('menu__dropdown-active');
  });
  $('.item__sublast').click(function () {
    $('.sublast').toggleClass('d-block');
    $('.item__sublast-header').toggleClass('menu__dropdown-active');
  });
  $('.item__last').click(function () {
    $('.last__last').toggleClass('d-block');
    $('.item__last-header').toggleClass('menu__dropdown-active');
  });
  $('.dropdown__span').click(function () {
    $('.menu__dropdown-right').hide();
  });


  $('.col__first').click(function () {
    $('.col__first').addClass('col-lg-8');
    $('.delafi__bg-last__none').addClass('d-block');
    $('.delafi__bg-last__none').removeClass('d-none');
    $('.delafi__bg-first__none').removeClass('d-block');
    $('.delafi__bg-first__none').addClass('d-none');
    $('.col__last').addClass('col-lg-4');
    $('.col__last').removeClass('col-lg-6');
    $('.col__last').removeClass('col-lg-8');
    $('.box__first').addClass('box__item-first');
    $('.box__last').removeClass('box__item-first');
    $('.delafi__bg-first').addClass('d-block');
    $('.delafi__bg-last').addClass('d-none');
    $('.delafi__bg-first').removeClass('d-none');
    $('.delafi__bg-last').removeClass('d-block');
    $('.box__last').removeClass('box__item-last');
  });
  $('.col__last').click(function () {
    $('.box__last').addClass('box__item-last');
    $('.delafi__bg-first__none').addClass('d-block');
    $('.delafi__bg-first__none').removeClass('d-none');
    $('.delafi__bg-last__none').removeClass('d-block');
    $('.delafi__bg-last__none').addClass('d-none');
    $('.delafi__bg-last').addClass('d-block');
    $('.delafi__bg-first').removeClass('d-none');
    $('.delafi__bg-last').removeClass('d-none');
    $('.delafi__bg-first').addClass('d-none');
    $('.box__first').removeClass('box__item-first');
    $('.col__last').addClass('col-lg-8');
    $('.col__first').removeClass('col-lg-6');
    $('.col__first').removeClass('col-lg-8');
    $('.col__first').addClass('col-lg-4');
    $('.col__last').removeClass('col-lg-4');
  });
});
$(document).ready(function () {
  $('.catalog__sidebar-menu').click(function () {
    $('.catalog__sidebar').toggleClass('open__menu');
    $('.catalog__sidebar-menu').toggleClass('catalog__remove');
  });
});
$(document).ready(function () {
  $('.aboute__bg-arow').click(function () {
    $('.aboute__bg-dropdown').toggleClass('d-block');
    $('.aboute__content').toggleClass('content__top');
  });
});
$(document).ready(function () {
  $('.catalog__icon-img__left').click(function () {
    $('.catalog__inner').removeClass('catalog__row')
    $('.catalog__icon-img__left').addClass('catalog__icon-active')
    $('.catalog__icon-img__right').removeClass('catalog__icon-active')
  })
  $('.catalog__icon-img__right').click(function () {
    $('.catalog__inner').addClass('catalog__row')
    $('.catalog__icon-img__right').addClass('catalog__icon-active')
    $('.catalog__icon-img__left').removeClass('catalog__icon-active')
  })
});
$(document).ready(function () {
  $('.catalog__mob-title').click(function () {
    $(this).next('.catalog__dropdown').toggleClass('one-block');
  });
});
$(document).ready(function () {
  $('.catalog__btn').click(function () {
    $('.catalog__btn').removeClass('catalog__active');
    $(this).addClass('catalog__active');
  });
});
$(document).ready(function () {
  $('.news__link').click(function () {
    $('.news__link').removeClass('news__list-active');
    $(this).addClass('news__list-active');
  });
});
$(document).ready(function () {
  $('.catalog__radio').click(function () {
    $('.catalog__radio').removeClass('catalog__sidebar-active');
    $(this).addClass('catalog__sidebar-active');
  });
  $('.catalog__radio2').click(function () {
    $('.catalog__radio2').removeClass('catalog__sidebar-active');
    $(this).addClass('catalog__sidebar-active');
  });
  $('.catalog__radio3').click(function () {
    $('.catalog__radio3').removeClass('catalog__sidebar-active');
    $(this).addClass('catalog__sidebar-active');
  });
  $('.catalog__radio4').click(function () {
    $('.catalog__radio4').removeClass('catalog__sidebar-active');
    $(this).addClass('catalog__sidebar-active');
  });
  $('.catalog__radio5').click(function () {
    $('.catalog__radio5').removeClass('catalog__sidebar-active');
    $(this).addClass('catalog__sidebar-active');
  });
  $('.catalog__radio6').click(function () {
    $('.catalog__radio6').removeClass('catalog__sidebar-active');
    $(this).addClass('catalog__sidebar-active');
  });
  $('.catalog__radio7').click(function () {
    $('.catalog__radio7').removeClass('catalog__sidebar-active');
    $(this).addClass('catalog__sidebar-active');
  });
  $('.catalog__radio8').click(function () {
    $('.catalog__radio8').removeClass('catalog__sidebar-active');
    $(this).addClass('catalog__sidebar-active');
  });


  $('.catalog__title-one').click(function () {
    $('.catalog__sidebar-one').toggleClass('catalog__sidebar-block');
  });
  $('.catalog__title-two').click(function () {
    $('.catalog__sidebar-two').toggleClass('catalog__sidebar-block');
  });
  $('.catalog__title-three').click(function () {
    $('.catalog__sidebar-three').toggleClass('catalog__sidebar-block');
  });
  $('.catalog__title-for').click(function () {
    $('.catalog__sidebar-for').toggleClass('catalog__sidebar-block');
  });
  $('.catalog__title-hut').click(function () {
    $('.catalog__sidebar-hut').toggleClass('catalog__sidebar-block');
  });
  $('.catalog__title-bot').click(function () {
    $('.catalog__sidebar-bot').toggleClass('catalog__sidebar-block');
  });
  $('.catalog__title-bun').click(function () {
    $('.catalog__sidebar-bun').toggleClass('catalog__sidebar-block');
  });
  $('.catalog__title-last').click(function () {
    $('.catalog__sidebar-last').toggleClass('catalog__sidebar-block');
  });
});
$(document).ready(function () {
  $('.n').click(function () {
    $('.none').hide();
    $('.new').show();
  });
  $('.b').click(function () {
    $('.none').hide();
    $('.bestele').show();
  });
  $('.a').click(function () {
    $('.none').hide();
    $('.action').show();
  });
  $('.l').click(function () {
    $('.none').hide();
    $('.lob').show();
  });
});


var swiper1 = new Swiper('.swiper1', {
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});
var swiper2 = new Swiper('.swiper2', {
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
var swiper3 = new Swiper('.swiper3', {
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination3',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
});

(function () {

  'use strict';

  const breakpoint = window.matchMedia('(min-width:575px)');

  let mySwiper;


  const breakpointChecker = function () {


    if (breakpoint.matches === true) {

      if (mySwiper !== undefined) mySwiper.destroy(true, true);

      return;

    } else if (breakpoint.matches === false) {

      return enableSwiper();

    }

  };


  const enableSwiper = function () {

    mySwiper = new Swiper('.swiper4', {
      navigation: {
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
      },
    });

  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();
})();