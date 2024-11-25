console.log("Hello World");

function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    switch (index) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    while (!(choice === "rock" || choice === "paper" || choice === "scissors")) {
        choice = prompt("Invalid choice. Please choose Rock, Paper, or Scissors.").toLowerCase();
    }
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both have ${humanChoice}`);
        } else if (
            humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore === computerScore) {
        console.log("The game's a tie!");
    } else if (humanScore > computerScore) {
        console.log("You win the game!");
    } else {
        console.log("You lose the game!");
    }
}

playGame();