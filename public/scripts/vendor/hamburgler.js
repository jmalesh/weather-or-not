$('.icon').hide();

function togglescroll () {
  $('body').on('touchstart', function(e){
    if ($('body').hasClass('noscroll')) {
      e.preventDefault();
    }
  });
}

$(document).ready(function() {
  $('.icon').on('click touchstart', function(e) {
    $('.mobilenav').fadeToggle(500);
    $('.top-menu').toggleClass('top-animate');
    $('body').toggleClass('noscroll');
    $('.mid-menu').toggleClass('mid-animate');
    $('.bottom-menu').toggleClass('bottom-animate');
    $('.icon').hide();
    e.preventDefault();
  });
});
