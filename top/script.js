// JavaScript Document

$(function(){
	$('#main_slide').infiniteslide({
		'height': 400,			// 高さを指定
		'speed': 30,			// スピードを指定
		'direction' : 'left',	// スライドする向きを指定
		'pauseonhover': false	// マウスオーバーでストップするかを指定
	});
});

  $(document).ready(function() {
    $('ul.menu .smooth1').smoothScroll({
      speed: 500,
    });
  });

  $(document).ready(function() {
    $('ul.menu .smooth2').smoothScroll({
      speed: 800,
    });
  });

  $(document).ready(function() {
    $('ul.menu .smooth3').smoothScroll({
      speed: 1400,
    });
  });

$(function() {
    $('.mainPhoto').bxSlider({
	mode:'fade',
	auto: true,
    });
});


$(function() {
  var $win = $(window),
      $header = $('.pageHeader'),
      headerHeight = $header.outerHeight(),
      startPos = 0;

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > startPos && value > headerHeight ) {
      $header.css('top', '-' + headerHeight + 'px');
    } else {
      $header.css('top', '0');
    }
    startPos = value;
  });
});