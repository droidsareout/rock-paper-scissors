function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);

    if (randomNumber === 1) return "Rock"
    else if (randomNumber === 2) return "Paper"
    else return "Scissors"
};

function getHumanChoice() {
    let input = prompt("Rock, paper, or scissors?");
    input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    return input
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            console.log("YOU WIN!")
            humanScore++;
        } else if (computerChoice === "Paper") {
            console.log("YOU LOSE!");
            computerScore++;
        } else {
            console.log("TIE!");
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Scissors") {
            console.log("YOU LOSE!")
            computerScore++;
        } else if (computerChoice === "Paper") {
            console.log("TIE!");
        } else {
            console.log("YOU WIN!");
            humanScore++;
        }
    } else {
        if (computerChoice === "Scissors") {
            console.log("TIE!")
        } else if (computerChoice === "Paper") {
            console.log("YOU WIN!");
            humanScore++;
        } else {
            console.log("YOU LOSE!");
            computerScore++;
        }
    }
}

playRound(getHumanChoice(), getComputerChoice());
