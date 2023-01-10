$(".abt").click(function() {
  $(".start").hide();
  $(".abt").hide();
  $(".contact").hide();
  $(".contactinfo").hide();
  $(".eat").hide();
  $(".certificate").hide();
  $(".kirb").hide();
  $(".resu").hide();
  $(".project").hide();
  $(".birb").show();
  $(".about").show();
  $(".con").show();
  $(".pro").show();
  $(".res").show();
});

$(".con").click(function() {
  $(".start").hide();
  $(".con").hide();
  $(".about").hide();
  $(".eat").hide();
  $(".certificate").hide();
  $(".birb").hide();
  $(".resu").hide();
  $(".project").hide();
  $(".kirb").show();
  $(".contact").show();
  $(".contactinfo").show();
  $(".abt").show();
  $(".pro").show();
  $(".res").show();
});

$(".pro").click(function() {
  $(".start").hide();
  $(".pro").hide();
  $(".birb").hide();
  $(".kirb").hide();
  $(".about").hide();
  $(".contact").hide();
  $(".contactinfo").hide();
  $(".resu").hide();
  $(".abt").show();
  $(".con").show();
  $(".eat").show();
  $(".certificate").show();
  $(".res").show();
  $(".project").show();
});

$(".res").click(function() {
  $(".start").hide();
  $(".birb").hide();
  $(".kirb").hide();
  $(".about").hide();
  $(".contact").hide();
  $(".contactinfo").hide();
  $(".eat").hide();
  $(".certificate").hide();
  $(".res").hide();
  $(".project").hide();
  $(".pro").show();
  $(".abt").show();
  $(".con").show();
  $(".resu").show();
});


$(".hom").click(function() {
  $(".about").hide();
  $(".contact").hide();
  $(".contactinfo").hide();
  $(".birb").hide();
  $(".eat").hide();
  $(".certificate").hide();
  $(".resu").hide();
  $(".project").hide();
  $(".kirb").show();
  $(".start").show();
  $(".abt").show();
  $(".con").show();
  $(".pro").show();
  $(".res").show();
});