const answers = ['rock', 'paper', 'scissors'];
let humanScore = 0;
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