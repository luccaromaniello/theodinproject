const answers = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];    
}

function getUserChoice() {
    let userAnswer = prompt("Rock, Paper or Scissors?").toLowerCase();
    let validAnswer = false;
    switch(userAnswer) {
        case answers[0]:
            validAnswer = true;
            break;
        case answers[1]:
            validAnswer = true;
            break;
        case answers[2]:
            validAnswer = true;
            break;
        default:   
            throw new Error("Invalid answer. Please choose Rock, Paper or Scissors. Also verify possible typos.");
    }
    return userAnswer;
}

function playRound(userChoice, computerChoice) {
    console.log("User Choice: " + userChoice)
    console.log("Computer Choice: " + computerChoice)
    let endRound = false;
    if (userChoice === computerChoice) {
        console.log("It's a tie!")
        endRound = true;
    } else {
        switch(userChoice) {
            case answers[0]:
                computerChoice === answers[1] ? console.log("Computer0 Wins") : console.log("User0 Wins");
                endRound = true;
                break;
            case answers[1]:
                computerChoice === answers[0] ? console.log("User1 Wins") : console.log("Computer1 Wins");
                endRound = true;
                break;
            case answers[2]:
                computerChoice === answers[1] ? console.log("User2 Wins") : console.log("Computer2 Wins");
                endRound = true;
                break;
        }
    }
    return endRound;
}

const userSelection = getUserChoice();
const computerSelection = getComputerChoice();

playRound(userSelection, computerSelection);