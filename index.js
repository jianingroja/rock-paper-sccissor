// everything in the function, so we don't have global variables
//self containg
const game = () => {
  //use --let--, to be updated later, needed acorss multiplle functions
  let pScore = 0;
  let cScore = 0;

  //start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    //computer options
    const computerOptioins = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //normal function, because we need to use --this--, for this to be bound with option
        //console.log(this);

        //generate numbers between 0/1/2
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptioins[computerNumber];
        //console.log(computerChoice);

        setTimeout(() => {
          //update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
          //here is where we call compare hands
          //update scores
          compareHands(this.textContent, computerChoice);
        }, 1500);

        //animation
        playerHand.style.animation = "shakePlayer 1.5s ease";
        computerHand.style.animation = "shakeComputer 1.5s ease";
        //clear style, for animation to be displayed each time
        hands.forEach((hand) => {
          hand.addEventListener("animationend", function () {
            this.style.animation = "";
          });
        });
      });
    });
  };

  //to be called in compareHans function
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  //to be called in playMatch function
  //check who is winning
  const compareHands = (playerChoice, computerChoice) => {
    //update Text
    const winner = document.querySelector(".winner");
    //checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie!";
      return;
    }

    //check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return; //end the function
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return; //end the function
      }
    }

    //check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return; //end the function
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return; //end the function
      }
    }

    //check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return; //end the function
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return; //end the function
      }
    }
  };

  // call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
