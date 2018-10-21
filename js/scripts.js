$(document).ready(function(){
  
  // jQuery Fade Effects
  $("#fadeOutBtn").click(function(){
    $("#fadeBox").fadeOut(1500);
  });
  $("#fadeInBtn").click(function(){
    $("#fadeBox").fadeIn(1500);
  });
  $("#fadeToggleBtn").click(function(){
    $("#fadeBox").fadeToggle(1500);
  });

  //jQuery Slide Effects
  $("#slideDownBtn").click(function(){
    $("#slideBox").slideDown(1500);
  });
  $("#slideUpBtn").click(function(){
    $("#slideBox").slideUp(1500);
  });
  $("#slideToggleBtn").click(function(){
    $("#slideBox").slideToggle(1500);
  });

  //jQuery Animate Movement
  $("#moveRightBtn").click(function(){
    $("#moveBox").animate({
      left: 500
    });
  });
  $("#moveLeftBtn").click(function(){
    $("#moveBox").animate({
      left: 0
    });
  });
  $("#moveAroundBtn").click(function(){
    var box = $("#moveBox");
    box.animate({
      left: 300
    });
    box.animate({
      top: 150
    });
    box.animate({
      left: 0,
      top: 150
    });
    box.animate({
      left: 0,
      top: 0
    });
  });
});