// billboardCarousel.js
// Author: Alfred
// 2018-09-11

{

  let isAllShow = false;

  $(window).scroll((event) => {
    if (window.innerWidth < 768) {
      $('.brand-gallery .gallery-holder').each((index, element) => {
        if (index < 3) {
          $(element).show();
        }
      })
      if (isAllShow === false) {
        $('.brand-gallery button').show();
      }
    } else {
      $('.brand-gallery button').hide();
    }
    event.stopPropagation();
  })

  $('.brand-gallery button').click((event) => {
    $('.brand-gallery .gallery-holder').show();
    isAllShow = true;
    $('.brand-gallery button').hide();
    event.stopPropagation();
  })

}