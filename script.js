console.log("Welcome to my little rock-paper scissors game!");

const optionsList = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;


function playRound() {

    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice = optionsList[randomNumber];
    
    let humanChoice = prompt("Please choose: rock, paper or scissors!").toLowerCase();

    if (humanChoice == "rock" && computerChoice == "scissors"
        || humanChoice == "paper" && computerChoice == "rock"
        || humanChoice == "scissors" && computerChoice == "paper"
    ) {
        userScore += 1;
        console.log(`User wins with ${humanChoice}!\nUser score: ${userScore}\nComputer score: ${computerScore}`);
    } else if (humanChoice == computerChoice) {
        console.log(`It's a draw with ${humanChoice}s!\nUser score: ${userScore}\nComputer score: ${computerScore}`);
    } else {
        computerScore += 1;
        console.log(`Computer wins with ${computerChoice}\nUser score: ${userScore}\nComputer score: ${computerScore}`);
    }
    
    
}

function finalResults(firstResult, secondResult) {
    switch (firstResult) {
        case firstResult < secondResult:
            console.log(`User loses!\nFinal score:\nUser: ${firstResult}\nComputer: ${secondResult}`);
        case firstResult > secondResult:
            console.log(`User wins!\nFinal score:\nUser: ${firstResult}\nComputer: ${secondResult}`);
        case firstResult == secondResult:
            console.log(`It's a draw!\nFinal score:\nUser: ${firstResult}\nComputer: ${secondResult}`);
    }   
}

function playGame() {
    for (let i = 1; i <= 3; i++) {
        console.log(`It's time for round ${i}!`);
        playRound();
    }
}

playGame();
// finalResults(userScore, computerScore);