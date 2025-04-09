console.log("Welcome to my little rock-paper scissors game!");

const choicesList = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let count = 0;

const container = document.createElement("div");
const score = document.createElement("div");
document.body.appendChild(container);
document.body.appendChild(score);

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const buttons = document.querySelectorAll("buttons");

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

rockButton.setAttribute("id", "Rock")
paperButton.setAttribute("id", "Paper")
scissorsButton.setAttribute("id", "Scissors")

container.addEventListener("click", function (e) {
    let humanChoice = e.target.id;

    playRound(humanChoice)

    if (count == 5) finalResults(humanScore, computerScore)

})


function playRound(choice) {    //computes who is a winner basing off their choice,
                         //and increments their score if needed 

    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = choicesList[randomNumber];

    if (choice == "Rock" && computerChoice == "scissors"
        || choice == "Paper" && computerChoice == "rock"
        || choice == "Scissors" && computerChoice == "paper") {
        humanScore += 1;
        console.log(`User wins with ${choice}!\nUser score: ${humanScore}\nComputer score: ${computerScore}`);

    } else if (choice == computerChoice) {
        console.log(`It's a draw with ${humanChoice}s!\nUser score: ${humanScore}\nComputer score: ${computerScore}`);

    } else {
        computerScore += 1;
        console.log(`Computer wins with ${computerChoice}\nUser score: ${humanScore}\nComputer score: ${computerScore}`);
    }

    count += 1;
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
