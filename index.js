var prevScrollpos = window.pageYOffset;

window.onscroll = function () {

  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    $("#navbar").css({"top":"0"});
  } 
  else {
    $("#navbar").css({"top":"-196px", "background-color" : "#d0fcda","box-shadow":"0px 14px 30px 2px rgba(0,0,0,0.20)"});
    $(".navitem").css("color","black");
  }
  prevScrollpos = currentScrollPos;

  if(prevScrollpos == 0){
    $("#navbar").css({"top":"0", "background-color" : "transparent","box-shadow":"none"});
    $(".navitem").css("color","white");
  }

}