// billboardCarousel.js
// Author: Alfred
// 2018-09-12

{
  $('.search-sum .search-sum-middle .search-title').click((event) => {
    const nowEle = $(event.target);
    nowEle.parent().toggleClass('active');
    nowEle.next().slideToggle();
    event.stopPropagation();
  })
}