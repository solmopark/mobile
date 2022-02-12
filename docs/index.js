console.clear();

setTimeout(function() {
  let $together = $('.con.con_1').masonry();
  
  $('.loading-box').addClass('hide');
  AOS.init();
}, 3000);

new WOW().init();