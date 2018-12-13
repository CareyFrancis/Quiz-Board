$(document).ready(function() {
  $("button1").click(function() {
    var score = 0;

    var answer = [];
    answer.push($("input:radio[name=answer1]:checked").val());
    answer.push($("input:radio[name=answer2]:checked").val());
    answer.push($("input:radio[name=answer3]:checked").val());
    answer.push($("input:radio[name=answer4]:checked").val());
    answer.push($("input:radio[name=answer5]:checked").val());
    answer.push($("input:radio[name=answer6]:checked").val());
    $(#form).hide(funtion(event) {
      $("display").html("Your final score is" + answer);
    })

    if (answer[0] == "3") {
      score++;
    }
    if (answer[1] == "3") {
      score++;
    }
    if (answer[2] == "2") {
      score++;
    }
    if (answer[3] == "3") {
      score++;
    }
    if (answer[4] == "1") {
      score++;
    }
    if (answer[5] == "2") {
      score++;
    }
  })

})
