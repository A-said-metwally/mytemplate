$(function(){
  'use strict';
  // adjust slider height
  var windowheight = $(window).height(),
      upperheight = $('.upper-bar').innerHeight(),
      navheight = $('.navbar').innerHeight();

  $('.slider, .carousel-item').height(windowheight - ( upperheight + navheight ));

  // featured wor shuffle
  $('.featured-work ul li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active')
    if ($(this).data('class') === 'all'){
      $('.shuffle-image img').css('opacity' , 1);
    }else{
      $('.shuffle-image img').css('opacity' , .2);
      $($(this).data('class')).css('opacity', 1);
    }
  });

})
