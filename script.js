//Not perfect yet - but getting there :)

// Initializing Music 

var drums = new Howl({
  urls: ['https://s.cdpn.io/31787/drums2.mp3'],
  autoplay: false,
  loop: true,
  volume: 0.5,
});

var bass = new Howl({
  urls: ['https://s.cdpn.io/31787/bass.mp3'],
  autoplay: false,
  loop: true,
  volume: 0.7,
});

var guitar = new Howl({
  urls: ['https://s.cdpn.io/31787/guitar.mp3'],
  autoplay: false,
  loop: true,
  volume: 0.01,
});

var piano = new Howl({
  urls: ['https://s.cdpn.io/31787/piano.mp3'],
  autoplay: false,
  loop: true,
  volume: 0.2,
});


// mute buttons 

$(".master-btn").click(function() {
  Howler.mute();
  $('.master').val(0.01);
  $('.volume').val(0.01);
  $(this).removeClass("active");
  $(".volume").addClass("dim");  
});


$(".ch1-btn").click(function() {
  drums.volume(0.01);
  $('.ch1').val(0.1);
  $(this).removeClass("active");
});

$(".ch2-btn").click(function() {
  bass.volume(0.01);
  $('.ch2').val(0.1);
  $(this).removeClass("active");
});

$(".ch3-btn").click(function() {
  guitar.volume(0.01);
  $('.ch3').val(0.1);
  $(this).removeClass("active");
});

$(".ch4-btn").click(function() {
  piano.volume(0.01);
  $('.ch4').val(0.1);
  $(this).removeClass("active");
});



// Play/Pause controls

$("#play").click(function () {
  drums.play();
  bass.play();
  guitar.play();
  piano.play();
  $("#pause").removeClass("pause-active");
  $(".volume").removeClass("dim");
  $(this).addClass("active");
});

$("#pause").click(function () {
  drums.pause();
  bass.pause();
  guitar.pause(); 
  piano.pause();
  $("#play").removeClass("active");
  $(".volume").addClass("dim");
  $(this).addClass("pause-active");
});

$("#stop").click(function () {
  drums.stop();
  bass.stop();
  guitar.stop(); 
  piano.stop();
  $("#play").removeClass("active");
  $(".volume").addClass("dim");
  $("#pause").removeClass("pause-active");
});

// Volume Sliders


$('.master').change(function () {                 
  var Width = $(this).val();
  $('.volume').val(Width);
  Howler.unmute();
  Howler.volume(Width/10);
  
  if ($(this).val() < 0.2) {
    $(".master-btn").removeClass("active");
    $(".volume").addClass("dim");
  }
  else {
    $(".master-btn").addClass("active");
    $(".volume").removeClass("dim");
  }
  
}); 


$('.ch1').change(function () {                 
  var Width = $(this).val();
  drums.volume(Width/10);

  if ($('.ch1').val() < 0.2) {
    
    $(".ch1-btn").removeClass("active");
  }
  else { 
    $(".ch1-btn").addClass("active");
  }
}); 

$('.ch2').change(function () {                 
  var Width = $(this).val();
  bass.volume(Width/10);
  
  if ($(this).val() < 0.2) {
    
    $(".ch2-btn").removeClass("active");
  }
  else {
    $(".ch2-btn").addClass("active");
  }
}); 

$('.ch3').change(function () {                 
  var Width = $(this).val();
  guitar.volume(Width/10);
  
  if ($(this).val() < 0.2) {
    
    $(".ch3-btn").removeClass("active");
  }
  else {
    $(".ch3-btn").addClass("active");
  }
}); 

$('.ch4').change(function () {                 
  var Width = $(this).val();
  piano.volume(Width/10);
  
  if ($(this).val() < 0.2) {
    
    $(".ch4-btn").removeClass("active");
  }
  else {
    $(".ch4-btn").addClass("active");
  }
}); 




// Music from http://www.musicradar.com/news/tech/free-music-samples-download-loops-hits-and-multis-217833/66