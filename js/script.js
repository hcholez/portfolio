$(document).ready(function() {

  var hauteurPage   = $(window).height();

  $(".container.content").each(function() {
      $(this).css('height', hauteurPage)
  });

  $(".date li").click(function() {
    if($(this).hasClass('ip')){
      $('.detail-date li').css('display', 'none')
      $('.detail-date #ip').css('display', 'block');
      $('.etudes ul.date li').css('opacity', '0.6');
      $('.etudes ul.date li.ip').css('opacity', '1');

    } else if ($(this).hasClass('iris')) {
      $('.detail-date li').css('display', 'none')
      $('.detail-date #iris').css('display', 'block');
      $('.etudes ul.date li').css('opacity', '0.6');
      $('.etudes ul.date li.iris').css('opacity', '1');

    } else if ($(this).hasClass('ub')) {
      $('.detail-date li').css('display', 'none')
      $('.detail-date #ub').css('display', 'block');
      $('.etudes ul.date li').css('opacity', '0.6');
      $('.etudes ul.date li.ub').css('opacity', '1');

    } else if ($(this).hasClass('fac')) {
      $('.detail-date li').css('display', 'none')
      $('.detail-date #fac').css('display', 'block');
      $('.etudes ul.date li').css('opacity', '0.6');
      $('.etudes ul.date li.fac').css('opacity', '1');

    } else if ($(this).hasClass('castel')) {
      $('.detail-date li').css('display', 'none')
      $('.detail-date #castel').css('display', 'block');
      $('.etudes ul.date li').css('opacity', '0.6');
      $('.etudes ul.date li.castel').css('opacity', '1');
    }
  });

});


$(window).resize(function() {

  var hauteurPage   = $(window).height();

  $(".container.content").each(function() {
      $(this).css('height', hauteurPage)
  });

});
