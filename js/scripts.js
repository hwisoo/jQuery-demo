$(document).ready(function(){
  
  // jQuery Fade Effects
  $("#fadeOutBtn").click(function(){
    $("#fadeBox").fadeOut(1300);
  });
  $("#fadeInBtn").click(function(){
    $("#fadeBox").fadeIn(1300);
  });
  $("#fadeToggleBtn").click(function(){
    $("#fadeBox").fadeToggle(1300);
  });

  // jQuery Slide Effects
  $("#slideDownBtn").click(function(){
    $("#slideBox").slideDown(1300);
  });
  $("#slideUpBtn").click(function(){
    $("#slideBox").slideUp(1300);
  });
  $("#slideToggleBtn").click(function(){
    $("#slideBox").slideToggle(1300);
  });

  // jQuery Animate Movement
  $("#moveRightBtn").click(function(){
    $("#moveBox").animate({
      left: 400
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
      top: 50
    });
    box.animate({
      left: 0,
      top: 50
    });
    box.animate({
      left: 0,
      top: 0
    });
  });

  // jQuery Animate Size
  $("#makeSmallBtn").click(function(){
    var box = $("#sizeBox");
      box.animate({
        width:'30%'
      });  
    });
    $("#makeBigBtn").click(function(){
      var box = $("#sizeBox");
        box.animate({
          width:'85%'
      });
    });
    $("#sizeChangeBtn").click(function(){
      var box = $("#sizeBox");
        box.animate({
          width:'35%'
        });
        box.animate({
          width:'85%'
        });
        box.animate({
          width:'20%'
        });
        box.animate({
          width:'85%'
        });
    });

    // jQuery Opacity
    $("#transparentBtn").click(function(){
      var box = $("#opacityBox");
      box.animate({
        opacity: '0.2'
      });
    });
    $("#opaqueBtn").click(function(){
      var box = $("#opacityBox");
      box.animate({
        opacity: 1
      });
    });
    $("#opacityBtn").click(function(){
      var box = $("#opacityBox");
      box.animate({
        opacity: '0.2'
      });
      box.animate({
        opacity: '1'
      });
      box.animate({
        opacity: '0'
      });
      box.animate({
        opacity:'1'
      });
    });
  });


