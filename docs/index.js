console.clear();

$('body').imagesLoaded(function() {
  $('.container').remove();
  AOS.init();
});

new WOW().init();