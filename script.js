console.log("Welcome to my little rock-paper scissors game!");

const optionsList = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice = optionsList[randomNumber];
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Please choose: rock, paper or scissors!");
    return humanChoice.toLowerCase();
}


function playRound(userChoice, computerChoice) {
    if (userChoice == "rock" && computerChoice == "scissors"
        || userChoice == "paper" && computerChoice == "rock"
        || userChoice == "scissors" && computerChoice == "paper"
    ) {
        userScore += 1;
        console.log(`User wins!\nUser score: ${userScore}\nComputer score: ${computerScore}`);
    } else if (userChoice == computerChoice) {
        console.log("It's a draw!");
    } else {
        computerScore += 1;
        console.log(`Computer wins!\nUser score: ${userScore}\nComputer score: ${computerScore}`);
    }
}

playRound(getHumanChoice(), getComputerChoice());