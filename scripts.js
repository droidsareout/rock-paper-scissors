function getComputerChoice() {
    const randomNumber = Math.floor((Math.random() * 3) + 1);

    if (randomNumber === 1) console.log("Rock")
    else if (randomNumber === 2) console.log("Paper")
    else console.log("Scissors");
};

function getHumanChoice() {
    const input = prompt("Rock, paper, or scissors?");
    console.log(input);
};

getComputerChoice();
getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.charAt(1).toUpperCase().slice(1).toLowerCase();

    console.log()


};