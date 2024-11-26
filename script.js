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

const resultContainer = document.querySelector("#result");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultContainer.textContent = `It's a tie! Both have ${humanChoice}`;
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        resultContainer.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultContainer.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
}

function declareResult() {
    if (humanScore === computerScore) {
        resultContainer.textContent = "The game's a tie!";
    } else if (humanScore > computerScore) {
        resultContainer.textContent = "You win the game!";
    } else {
        resultContainer.textContent = "You lose the game!";
    }
}

const buttonList = document.querySelector("#button-list")
buttonList.addEventListener("click", (e) => {
    const humanChoice = e.target.id;
    if (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")) {
        return;
    }

    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
})
