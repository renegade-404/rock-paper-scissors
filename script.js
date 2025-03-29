console.log("Welcome to my little rock-paper scissors game!");


const optionsList = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice = optionsList[randomNumber];
    console.log(computerChoice);
}

function getHumanChoice() {
    let userChoice = prompt("Please choose: rock, paper or scissors!");
    console.log(userChoice);
}

getComputerChoice();
getHumanChoice();
