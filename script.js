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