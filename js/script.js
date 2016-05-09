$(document).ready(function() {

  $('.presentation, .etude, .contact, .professionnel, .passion').each(function() {
    var hauteurPage   = $(window).height();
    $(this).css('height', hauteurPage);
  });

});


$(window).resize(function() {

  $('.presentation, .etude, .contact, .professionnel, .passion').each(function() {
    var hauteurPage   = $(window).height();
    $(this).css('height', hauteurPage);
  });

});
