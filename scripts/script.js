var playerScore = 0;
var computerScore = 0;

var buttons = document.querySelectorAll(".btn");

//adding event listener to every selector named .btn and when clicked calling the playround function
buttons.forEach((button) => button.addEventListener("click", playround));

//defining the playround function
//e parameter is the mouse event object
function playround(e) {
  if (isGameOver()) {
    window.alert("Game over.");
  }

  //getting button id's
  let button_id;
  let playerSelection = e.target.parentNode.id;
  let computerSeletion = getComputerSelection();
  var winner = getWinner(playerSelection, computerSeletion);
  updateScore(winner);
  finalwinner(playerScore, computerScore);
}

//isGameOver function here
isGameOver = () => playerScore == 5 || computerScore == 5;

function getComputerSelection() {
  const array = ["rock", "paper", "scissor"];

  //generate a random number using math.rand function
  var random_number = Math.floor(Math.random() * array.length);

  return array[random_number];
}

function getWinner(player1, player2) {
  //tie cases
  if (
    (player1 == "rock" && player2 == "rock") ||
    (player1 == "paper" && player2 == "paper") ||
    (player1 == "scissor" && player2 == "scissor")
  ) {
    document.getElementById("computer-choice").innerHTML = player1;
    document.getElementById("winner").innerHTML = "It's a Tie";
    return "tie";
  }
  //computer wins
  else if (
    (player1 == "rock" && player2 == "paper") ||
    (player1 == "paper" && player2 == "scissor") ||
    (player1 == "scissor" && player2 == "rock")
  ) {
    document.getElementById("computer-choice").innerHTML =
      "Computer's choice: " + player2;
    document.getElementById("winner").innerHTML = "Computer Wins";
    return "computer";
  } else if (
    (player1 == "paper" && player2 == "rock") ||
    (player1 == "scissor" && player2 == "paper") ||
    (player1 == "rock" && player2 == "scissor")
  ) {
    document.getElementById("computer-choice").innerHTML =
      "Computer's choice: " + player2;
    document.getElementById("winner").innerHTML = "You Win";
    return "player";
  }
}

//updating score
function updateScore(winner) {
  if (winner == "tie") {
    return;
  } else if (winner == "computer") {
    computerScore++;
    document.getElementById("computer").innerHTML = computerScore;
  } else {
    playerScore++;
    document.getElementById("yours").innerHTML = playerScore;
  }
}

//declaring the winner

function finalwinner(player1, player2) {
  if (player1 == 5) {
    window.alert("Congrats! You Won.");
  } else if (player2 == 5) {
    window.alert("Never Give up. Try again");
  }
}
