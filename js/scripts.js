$(document).ready(function () {
  $("").click(function () {
    var score = 0;

    var answer = [];
    answer.push($("input:radio[nam=answer1]:checked").val());
    answer.push($("input:radio[nam=answer2]:checked").val());
    answer.push($("input:radio[nam=answer3]:checked").val());
    answer.push($("input:radio[nam=answer4]:checked").val());
    answer.push($("input:radio[nam=answer5]:checked").val());
    answer.push($("input:radio[nam=answer6]:checked").val());
    $(#body1).hide(funtion(event){
      $("display").html("Your final score is /5");
    })
    if (answer[0]==) {
      score++;
    }
    if (answer[1]==) {
      score++;
    }
    if (answer[2]==) {
      score++;
    }
    if (answer[3]==) {
      score++;
    }
    if (answer[4]==){
      score++;
    }
    if (answer[5]==){
      score++;
    }
  })

})
