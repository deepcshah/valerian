(function() {

  //BioToggles function modified from Mig Reyes, www.migreyes.com
  
  var BioToggles, BioSwitch;

  BioToggles = function() {
    var $toggle;
    $toggle = $('[data-switch]');
    return $toggle.click(function() {
      var $bio, $body, $full, $summary;
      $bio = $(this).data("switch");
      $body = $('html, body');
      $switch = $('.about-bio-switch');
      $full = $('.about-bio-full');
      $summary = $('.about-bio-summary');
      switch ($bio) {
        case "summary":
          $body.animate({
            scrollTop: '100px'
          });
          $full.show();
          $summary.hide();
          $switch.prop('checked', true);
          $('[data-bio="summary"]').removeClass("strong");
          $('[data-bio="full"]').addClass("strong");
          return $(this).data("switch", "full");
        case "full":
          $body.animate({
            scrollTop: '100px'
          });
          $summary.show();
          $full.hide();
          $switch.prop('checked', false);
          $('[data-bio="full"]').removeClass("strong");
          $('[data-bio="summary"]').addClass("strong");
          return $(this).data("switch", "summary");
      }
    });
  };

  BioSwitch = function() {
    var $toggle;
    $toggle = $('[data-bio]');
    return $toggle.click(function() {
      var $bio, $body, $full, $summary;
      $bio = $(this).data("bio");
      $body = $('html, body');
      $switch = $('.about-bio-switch');
      $full = $('.about-bio-full');
      $summary = $('.about-bio-summary');
      switch ($bio) {
        case "summary":
          $body.animate({
            scrollTop: '100px'
          });
          $full.hide();
          $summary.show();
          $switch.prop('checked', false);
          $('[data-bio="summary"]').addClass("strong");
          $('[data-bio="full"]').removeClass("strong");
          return;
        case "full":
          $body.animate({
            scrollTop: '100px'
          });
          $summary.hide();
          $full.show();
          $switch.prop('checked', true);
          $('[data-bio="full"]').addClass("strong");
          $('[data-bio="summary"]').removeClass("strong");
          return;
      }
    });
  };


  $(function() {
    BioToggles();
    BioSwitch();
  });

}).call(this);

/*var feed = new Instafeed({
  get: 'user',
  userId: '11202074',
  accessToken: '11202074.fabe8a3.2db116a80e684b94acc0b4abb3cdf484',
  template: '<li class="insta-cell"><img src="{{image}}" /></li>',
  limit: 6,
  resolution: 'low_resolution'
});
feed.run();
$(document).ready(function() {
  currently_reading_call = 'http://www.goodreads.com/review/list/24480951.xml?key=7jjEtXznlOVwe1DfZ4w&v=2&shelf=currently-reading&per_page=200&page=1';
  read_call = 'http://www.goodreads.com/review/list/24480951.xml?key=7jjEtXznlOVwe1DfZ4w&v=2&shelf=read&per_page=200&page=1';

  var currently_reading_call_passthrough = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="' + currently_reading_call + '"') + '&format=json&callback=?';

  var read_call_passthrough = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="' + read_call + '"') + '&format=json&callback=?';

  var $select_currently_reading = $('#goodreads-reading');
  var $select_read = $('#goodreads-read');

  $.ajax({
    url: currently_reading_call_passthrough,
    dataType:'JSON',
    success:function(data){
      $select_currently_reading.html('');
      var reviews = data.query.results.GoodreadsResponse.reviews.review;
      if (reviews.review != undefined) {
        $.each(reviews, function(key, val) {
          console.log(val);
          $select_currently_reading.append('<li class="book"><a class="book-image book-image-link" href="' + val.book.link + '"><img class="book-image" src="' + val.book.image_url + '" /></a><p class="book-title">' + val.book.title + '</p><p class="book-author">' + val.book.authors.author.name + '</p><p class="book-link"><a href="' + val.book.link + '">View on Goodreads</a></p></li>');
        });
      } else if (reviews.review == undefined) {
        $select_currently_reading.append('<li class="book"><a class="book-image book-image-link" href="' + reviews.book.link + '"><img class="book-image" src="' + reviews.book.image_url + '" /></a><p class="book-title">' + reviews.book.title + '</p><p class="book-author">' + reviews.book.authors.author.name + '</p><p class="book-link"><a href="' + reviews.book.link + '">View on Goodreads</a></p></li>');
      } else {
        $select_currently_reading.append('<p class="book-title">What should I read?</p>');
      }
    },
    error:function(){
      $select_currently_reading.html('');
      $select_currently_reading.append('<p class="book-title">There was an error loading the books. Please refresh the page.</p>');
    }
  });

  $.ajax({
    url: read_call_passthrough,
    dataType:'JSON',
    success:function(data){
      console.log(data);
      $select_read.html('');
      var reviews = data.query.results.GoodreadsResponse.reviews.review;
      // if (reviews.review != undefined) {
        $.each(reviews, function(key, val) {
          console.log(val);
          $select_read.append('<li class="book"><a class="book-image book-image-link" href="' + val.book.link + '"><img class="book-image" src="' + val.book.image_url + '" /></a><p class="book-title">' + val.book.title + '</p><p class="book-author">' + val.book.authors.author.name + '</p><p class="book-link"><a href="' + val.book.link + '">View on Goodreads</a></p></li>');
        });
      // } else if (reviews.review == undefined) {
      //   $select_read.append('<li class="book"><a class="book-image book-image-link" href="' + reviews.book.link + '"><img class="book-image" src="' + reviews.book.image_url + '" /></a><p class="book-title">' + reviews.book.title + '</p><p class="book-author">' + reviews.book.authors.author.name + '</p><p class="book-link"><a href="' + reviews.book.link + '">View on Goodreads</a></p></li>');
      // } else {
      //   $select_read.append('<p class="book-title">I haven’t read anything? That doesn’t sound right.</p>');
      // }
    },
    error:function(){
      $select_read.html('');
      $select_read.append('<p class="book-title">There was an error loading the books. Please refresh the page.</p>');
    }
  });
});
*/