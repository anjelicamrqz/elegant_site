// external js: flickity.pkgd.js

var autoPlayIntervals = [
    1500,
    1500,
    3000,
    3000,
    5000,
    1500,
    1500,
    5000,
    3000,
  ];
  
  var $carousel = $('.carousel').flickity({
    autoPlay: autoPlayIntervals[0],
  });
  var flkty = $carousel.data('flickity');
  
  $carousel.on( 'select.flickity', function() {
    // set custom autoPlay interval
    // default is 1500ms
    flkty.options.autoPlay = autoPlayIntervals[ flkty.selectedIndex ] || 1500;
  });
  