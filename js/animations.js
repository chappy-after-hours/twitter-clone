$(document).ready(function(){

$('#tweet-submit').hide();
$('#char-count').hide();

$(document).on('click','.tweet-compose',function (e) {
  e.preventDefault();
  $('.tweet-compose').css("height",'5em');
  $('#tweet-submit').show();
  $('#char-count').show();
})

$(document).on('keyup','.tweet-compose', function () {
  var a = 140 - $('.tweet-compose').val().length;
  $('#char-count').text(a);
  if(a <= 10) {
    $('#char-count').css('color','red');
  }else {
    $('#char-count').css('color','inherit');
  }
  if (a < 0 || a === 140) {
    $('#tweet-submit').prop('disabled', true);
  } else {
    $('#tweet-submit').prop('disabled', false);
  }

  

})

})
