function next(){
  var img = $('img.active');
  var i = $('i.active');

  img.removeClass('active');
  i.removeClass('active');

  if (img.hasClass('last')) {
    $('img.first').addClass('active');
    $('i.first').addClass('active');
  } else {
    img.next().addClass('active');
    i.next().addClass('active');
  }
}

function prec(){
  var img = $('img.active');
  var i = $('i.active');

  img.removeClass('active');
  i.removeClass('active');

  if (img.hasClass('first')) {
    $('img.last').addClass('active');
    $('i.last').addClass('active');
  } else {
    img.prev().addClass('active');
    i.prev().addClass('active');
  }
}

function keyPrecSucc(){
  if (event.which == 39) {
    next();
  } else if (event.which == 37){
    prec();
  }
}



$(document).ready(function(){

$('.next').click (next);

$('.prev').click (prec);

$(document).keydown(keyPrecSucc);

$('.nav i').click(function() {


  $('.nav i').removeClass('active');
  $(this).addClass('active');
  $('img').removeClass('active');
  $($('img').get($(this).index())).addClass('active');
});

});
