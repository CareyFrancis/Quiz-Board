$(document).ready(function() {
  $(".button1").click(function() {

    var answerA = $("input:radio[name=answer1]:checked").val();
    var answerB = $("input:radio[name=answer2]:checked").val();
    var answerC = $("input:radio[name=answer3]:checked").val();
    var answerD = $("input:radio[name=answer4]:checked").val();
    var answerE = $("input:radio[name=answer5]:checked").val();
    var answerF = $("input:radio[name=answer6]:checked").val();

    var res1, res2, res3, res4, res5, res6;

    if (answerA.toString() === "correct") {
      res1 = 1;
    } else {
      res1 = 0;
    }
    if (answerB.toString() === "correct") {
      res2 = 1;
    } else {
      res2 = 0;
    }
    if (answerC.toString() === "correct") {
      res3 = 1;
    } else {
      res3 = 0;
    }
    if (answerD.toString() === "correct") {
      res4 = 1;
    } else {
      res4 = 0;
    }
    if (answerE.toString() === "correct") {
      res5 = 1;
    } else {
      res5 = 0;
    }
    if (answerF.toString() === "correct") {
      res6 = 1;
    } else {
      res6 = 0;
    }
    addNum(res1, res2, res3, res4, res5, res6);
  });
});

function addNum(num1, num2, num3, num4, num5, num6) {
  var result = num1 + num2 + num3 + num4 + num5 + num6;
  $("#output").text("Your score is " + result + " out of 6!");
  hideX();
};

function hideX() {
  $(".well").hide();
};
