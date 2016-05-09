$(document).ready(function() {

  var hauteurPage   = $(window).height();

  $(".container.content").each(function() {
      $(this).css('height', hauteurPage)
  });

});


$(window).resize(function() {

  var hauteurPage   = $(window).height();

  $(".container.content").each(function() {
      $(this).css('height', hauteurPage)
  });

});
