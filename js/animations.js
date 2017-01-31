$(document).ready(function(){

$('#tweet-submit').hide();
$('#char-count').hide();
$('.tweet-actions').hide();

function appendTweet(tweet) {

  $('#stream').prepend(

    '<div class="tweet">' +
      '<div class="content">' +
        '<img class="avatar" src="img/alagoon.jpg">'+
        '<strong class="fullname">Jeff Chapman</strong>'+
        '<span class="username">@jeffcchapman</span>'+
        '<p class="tweet-text">'+ tweet + '</p>'+
        '<div class="tweet-actions">'+
          '<ul>'+
            '<li><span class="icon action-reply"></span> Reply</li>'+
            '<li><span class="icon action-retweet"></span> Retweet</li>'+
            '<li><span class="icon action-favorite"></span> Favorite</li>'+
            '<li><span class="icon action-more"></span> More</li>'+
          '</ul>'+
        '</div>'+
        // '<div class="stats">'+
        //   '<div class="retweets">'+
        //     '<p class="num-retweets">30</p>'+
        //     '<p>RETWEETS</p>'+
        //   '</div>'+
        //   '<div class="favorites">'+
        //     '<p class="num-favorites">6</p>'+
        //     '<p>FAVORITES</p>'+
        //   '</div>'+
        //   '<div class="users-interact">'+
        //     '<div>'+
        //       '<img src="img/jennyshen.jpg" />'+
        //       '<img src="img/damenleeturks.jpg" />'+
        //     '</div>'+
        //   '</div>'+
        //   '<div class="time">'+
        //     '1:04 PM - 19 Sep 13'+
        //   '</div>'+
        // '</div>'+
        // '<div class="reply">'+
        //   '<img class="avatar" src="img/alagoon.jpg" />'+
        //   '<textarea class="tweet-compose" placeholder="Reply to @theonion"/></textarea>'+
        // '</div>'+
      '</div>'+
    '</div>'



  );

}

$(document).on('click', '#tweet-submit', function(e) {
  e.preventDefault();
  var tweet = $('.tweet-compose').val();

  appendTweet(tweet);

  
  $('.tweet-compose').val('');
  $('.tweet-compose').css("height",'2.5em');
  $('#tweet-submit').hide();
  $('#char-count').hide();
})

$(document).on('click', '.tweet-compose',function (e) {
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

// $('.tweet-actions').hover(function() {
//   $(this).show();
// }, function() {
//   $(this).hide();
// })

$(".tweet").hover(function(){
    $('.tweet-actions', this).show();
    }, function(){
    $('.tweet-actions', this).hide();
});

})
