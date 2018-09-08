// nav.js
// Author: Alfred
// 2018-09-08

{
  $('#viewAllVehicle').click((event) => {
    $('.nav-wrapper').toggle();
    $('.nav-content').toggle();
    event.stopPropagation();
  });

  $(window).click((event) => {
    if ($(event.target).hasClass('nav-wrapper')) {
      $('#viewAllVehicle').click();
    }
  });

  $('.main-nav .nav-content .model-type a').click((event) => {
    $('.main-nav .nav-content .model-type ul li').removeClass('active');
    $(event.target).parent().addClass('active');
    $('.main-nav .nav-content .model-list ul').removeClass('active');
    $(`.main-nav .nav-content .model-list ul#${event.target.name}`).addClass('active');
    event.stopPropagation();
  });
}