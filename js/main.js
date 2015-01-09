$(function(){

  var computerChoice = Array("rock", "paper", "scissors", "lizard", "spock");

  $("button").click(function() {
    var $humanChoice = this.id;
    var $computerChoice = computerChoice[Math.floor(Math.random()*computerChoice.length)];

    if ( ($humanChoice == "rock" && $computerChoice == "scissors") || ($humanChoice == "scissors" && $computerChoice == "paper") || ($humanChoice == "paper" && $computerChoice == "rock") || ($humanChoice == "lizard" && $computerChoice == "spock") || ($humanChoice == "spock" && $computerChoice == "scissors") || ($humanChoice == "scissors" && $computerChoice == "lizard") || ($humanChoice == "lizard" && $computerChoice == "paper") || ($humanChoice == "paper" && $computerChoice == "spock") || ($humanChoice == "spock" && $computerChoice == "rock") || ($humanChoice == "rock" && $computerChoice == "lizard")
      ) {
      var currentValue = parseInt($("#humanScore").html(),10);
      var newValue = currentValue + 1;
      $('#humanScore').html(newValue);
    }
    if ( ($humanChoice == "scissors" && $computerChoice == "rock") || ($humanChoice == "paper" && $computerChoice == "scissors") || ($humanChoice == "rock" && $computerChoice == "paper") || ($humanChoice == "spock" && $computerChoice == "lizard") || ($humanChoice == "scissors" && $computerChoice == "spock") || ($humanChoice == "lizard" && $computerChoice == "scissors") || ($humanChoice == "paper" && $computerChoice == "lizard") || ($humanChoice == "spock" && $computerChoice == "paper") || ($humanChoice == "rock" && $computerChoice == "spock")|| ($computerChoice == "rock" && $humanChoice == "lizard")
      ) {
      var currentValueTwo = parseInt($("#computerScore").html(),10);
      var newValueTwo = currentValueTwo + 1;
      $('#computerScore').html(newValueTwo);
    }
    $("#hChoice").html("Player chose");
    $("#cChoice").html("Computer chose");
    $("#hChoiceImg").html("<img src='images/" + $humanChoice + ".png' />");
    $("#cChoiceImg").html("<img src='images/" + $computerChoice + ".png' />");
  });
});