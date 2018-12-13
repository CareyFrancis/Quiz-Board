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
    if (answer[0]=="C") {
      score++;
    }
    if (answer[1]=="C") {
      score++;
    }
    if (answer[2]=="B") {
      score++;
    }
    if (answer[3]==) {
      score++;
    }
    if (answer[4]=="A"){
      score++;
    }
    if (answer[5]=="B"){
      score++;
    }
  })

})
