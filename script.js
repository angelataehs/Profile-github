$(".abt").click(function() {
  $(".start").hide();
  $(".abt").hide();
  $(".contact").hide();
  $(".contactinfo").hide();
  $(".eat").hide();
  $(".certificate").hide();
  $(".kirb").hide();
  $(".birb").show();
  $(".about").show();
  $(".con").show();
  $(".pro").show();
});

$(".con").click(function() {
  $(".start").hide();
  $(".con").hide();
  $(".about").hide();
  $(".eat").hide();
  $(".certificate").hide();
  $(".birb").hide();
  $(".kirb").show();
  $(".contact").show();
  $(".contactinfo").show();
  $(".abt").show();
  $(".pro").show();
});

$(".pro").click(function() {
  $(".start").hide();
  $(".pro").hide();
  $(".birb").hide();
  $(".kirb").hide();
  $(".about").hide();
  $(".contact").hide();
  $(".contactinfo").hide();
  $(".abt").show();
  $(".con").show();
  $(".eat").show();
  $(".certificate").show();
});

$(".hom").click(function() {
  $(".about").hide();
  $(".contact").hide();
  $(".contactinfo").hide();
  $(".birb").hide();
  $(".eat").hide();
  $(".certificate").hide();
  $(".kirb").show();
  $(".start").show();
  $(".abt").show();
  $(".con").show();
  $(".pro").show();
});