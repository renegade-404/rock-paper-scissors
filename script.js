console.log("Welcome to my little rock-paper scissors game!");
const userChoice = prompt("Please choose: rock, paper or scissors!");

const optionsList = ["rock", "paper", "scissors"];

function computerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    let finalChoice = optionsList[randomNumber];
    return finalChoice
}

