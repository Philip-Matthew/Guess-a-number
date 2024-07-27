"use strict";

/*
  TODOs: 

  1. Generate a random number.
  2. Get input(guess) from the check box and add eventListener to the check button.
  3. Check if the guess is high, low or equal.
  4. Decrement 1 for each wrong guess.

*/

// TODO 1: Generation of random number.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// TODO 2: Add Event Listener and get the guess from the user.

const checkGuess = function () {
  let guess = Number(document.querySelector(".guess").value);
  // console.log(secretNumber, guess);

  // TODO 3: Checking Guess.
  if (score > 1) {
    if (guess > secretNumber) {
      document.querySelector(".message").textContent = "📈Too High.";
      score--;
      document.querySelector(".score").textContent = score;
    }
    if (guess < secretNumber) {
      document.querySelector(".message").textContent = "📉Too Low.";
      score--;
      document.querySelector(".score").textContent = score;
    }
    if (guess === secretNumber) {
      document.querySelector(".message").textContent = "🎉You Won.";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = secretNumber;

      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    }
  } else {
    document.querySelector(".score").textContent = 0;
    document.querySelector(".message").textContent = "💀 You lose.";
    document.querySelector(".number").textContent = secretNumber;
  }
};

const restartGame = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
};

document.querySelector(".check").addEventListener("click", checkGuess);

document.querySelector(".again").addEventListener("click", restartGame);

document.querySelector(".guess").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkGuess();
  }
});

document.querySelector("body").addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Escape") {
    restartGame();
  }
});
