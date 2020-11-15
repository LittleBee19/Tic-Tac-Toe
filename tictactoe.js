var playerOne = 1;
var playerTwo = 2;
var iconX = '<img class="icon" src="x.png" alt="" srcset=""/>';
var iconO = '<img class="icon" src="o.png" alt="" srcset=""/>';
var currentPlayer = playerOne;
var currentIcon = iconX;
var click = 0;

//Preveri, kje je klik in kdo je na vrsti
$(".box").on("click", function () {
  if (isEmptyBox($(this)) && isFinished() != true) {
    if (currentPlayer === playerOne) {
      $(this).html(iconX);
      click++;
      if (isFinished() != true) {
        currentPlayer = playerTwo;
        $("span").text("PLAYER 2");
      } else {
          $(".text").text("PLAYER 1 IS THE WINNER!");
      }
    } else {
      $(this).html(iconO);
      click++;
      if (isFinished() != true) {
        currentPlayer = playerOne;
        $("span").text("PLAYER 1");
      } else {
        $(".text").text("PLAYER 2 IS THE WINNER!");
      }
    }
  }
  if (click === 9 && isFinished() != true) {
      $(".text").text("NOBODY WINS THIS TURN!");
  }
});

//Preveri, če je kvadratek že zaseden
function isEmptyBox(element) {
  return !$.trim(element.html());
}

//Preveri, če je prišlo do zmage
function isFinished() {
    if ($("#1of1").html() === $("#1of2").html() && $("#1of2").html() === $("#1of3").html() && isEmptyBox($("#1of1")) === false  && isEmptyBox($("#1of2")) === false  && isEmptyBox($("#1of3")) === false) {
        $("#1of1").delay(500).css("background-color","#2196F3");
        $("#1of2").delay(500).css("background-color","#2196F3");
        $("#1of3").delay(500).css("background-color","#2196F3");
        return true;
    }
    else if ($("#2of1").html() === $("#2of2").html() && $("#2of2").html() === $("#2of3").html() && isEmptyBox($("#2of1")) === false  && isEmptyBox($("#2of2")) === false  && isEmptyBox($("#2of3")) === false) {
        $("#2of1").delay(500).css("background-color","#2196F3");
        $("#2of2").delay(500).css("background-color","#2196F3");
        $("#2of3").delay(500).css("background-color","#2196F3");
        return true;
    }
    else if ($("#3of1").html() === $("#3of2").html() && $("#3of2").html() === $("#3of3").html() && isEmptyBox($("#3of1")) === false  && isEmptyBox($("#3of2")) === false  && isEmptyBox($("#3of3")) === false) {
        $("#3of1").delay(500).css("background-color","#2196F3");
        $("#3of2").delay(500).css("background-color","#2196F3");
        $("#3of3").delay(500).css("background-color","#2196F3");
        return true;
    }
    else if ($("#1of1").html() === $("#2of1").html() && $("#2of1").html() === $("#3of1").html() && isEmptyBox($("#1of1")) === false  && isEmptyBox($("#2of1")) === false  && isEmptyBox($("#3of1")) === false) {
        $("#1of1").delay(500).css("background-color","#2196F3");
        $("#2of1").delay(500).css("background-color","#2196F3");
        $("#3of1").delay(500).css("background-color","#2196F3");
        return true;
    }
    else if ($("#1of2").html() === $("#2of2").html() && $("#2of2").html() === $("#3of2").html() && isEmptyBox($("#1of2")) === false  && isEmptyBox($("#2of2")) === false  && isEmptyBox($("#3of2")) === false) {
        $("#1of2").delay(500).css("background-color","#2196F3");
        $("#2of2").delay(500).css("background-color","#2196F3");
        $("#3of2").delay(500).css("background-color","#2196F3");
        return true;
    }
    else if ($("#1of3").html() === $("#2of3").html() && $("#2of3").html() === $("#3of3").html() && isEmptyBox($("#1of3")) === false  && isEmptyBox($("#2of3")) === false  && isEmptyBox($("#3of3")) === false) {
        $("#1of3").delay(500).css("background-color","#2196F3");
        $("#2of3").delay(500).css("background-color","#2196F3");
        $("#3of3").delay(500).css("background-color","#2196F3");
        return true;
    }
    else if ($("#1of1").html() === $("#2of2").html() && $("#2of2").html() === $("#3of3").html() && isEmptyBox($("#1of1")) === false  && isEmptyBox($("#2of2")) === false  && isEmptyBox($("#3of3")) === false) {
        $("#1of1").delay(500).css("background-color","#2196F3");
        $("#2of2").delay(500).css("background-color","#2196F3");
        $("#3of3").delay(500).css("background-color","#2196F3");
        return true;
    }
    else if ($("#1of3").html() === $("#2of2").html() && $("#2of2").html() === $("#3of1").html() && isEmptyBox($("#1of3")) === false  && isEmptyBox($("#2of2")) === false  && isEmptyBox($("#3of1")) === false) {
        $("#1of3").delay(500).css("background-color","#2196F3");
        $("#2of2").delay(500).css("background-color","#2196F3");
        $("#3of1").delay(500).css("background-color","#2196F3");
        return true;
    }
    return false;
}

//Nova igra
$("#reset").on("click", function () {
  $(".box").empty();
  $(".text").html("It's <span>PLAYER "+currentPlayer+"</span> turn.");
  $(".box").removeAttr("style");
  click = 0;
});
