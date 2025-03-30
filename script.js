console.log("Welcome to my little rock-paper scissors game!");

const choicesList = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;


function playRound() {    //computes who is a winner basing off their choice,
                         //and increments their score if needed 

    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = choicesList[randomNumber];

    let humanChoice = prompt("Please choose: rock, paper or scissors!").toLowerCase();

    if (humanChoice == "rock" && computerChoice == "scissors"
        || humanChoice == "paper" && computerChoice == "rock"
        || humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        console.log(`User wins with ${humanChoice}!\nUser score: ${humanScore}\nComputer score: ${computerScore}`);

    } else if (humanChoice == computerChoice) {
        console.log(`It's a draw with ${humanChoice}s!\nUser score: ${humanScore}\nComputer score: ${computerScore}`);

    } else {
        computerScore += 1;
        console.log(`Computer wins with ${computerChoice}\nUser score: ${humanScore}\nComputer score: ${computerScore}`);
    }
}

function finalResults(firstScore, secondScore) { //final results basing off global scores 

    if (firstScore < secondScore) {
        console.log(`User loses!\nFinal score:\nUser: ${firstScore}\nComputer: ${secondScore}`);

        } else if (firstScore > secondScore) {
            console.log(`User wins!\nFinal score:\nUser: ${firstScore}\nComputer: ${secondScore}`);
    
        } else {
            console.log(`It's a draw!\nFinal score:\nUser: ${firstScore}\nComputer: ${secondScore}`);
        }
    }

function playGame() {

    for (let i = 1; i <= 3; i++) {
        console.log(`It's time for round ${i}!`);
        playRound();
    };

    finalResults(humanScore, computerScore);
}

playGame();