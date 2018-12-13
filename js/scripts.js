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

  })

})
