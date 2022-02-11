console.clear();

$('body').imagesLoaded(function() {
  $('.loading').remove();
  AOS.init();
});

new WOW().init();