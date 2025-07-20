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

let humanScore = 0;
let computerScore = 0;