// your code here!

var Calculator = function(){

  $("#equals").click(validate);
};

function validate(){
  var $num1 = $("#number1").val();
  var $num2 = $("#number2").val();
  var $operator = $("#operation").val();

  var mathOperators = ['+', '-', '*', '/'];

  if (!($num1.match(/^\d+$/) && $num2.match(/^\d+$/))) {
    $("#result").text('Sorry, one of those is not a valid number!');
  }
  else if (mathOperators.indexOf($operator) == -1) {
    $("#result").text('Sorry, not a valid operation!');
  }
  else {
    var total = eval(parseInt($num1) + $operator + parseInt($num2));
    $("#result").text(total);
  }
};
