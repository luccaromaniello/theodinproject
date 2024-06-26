const answers = ['rock', 'paper', 'scissors'];

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

function playGame() {
    let userScore = 0;
    let computerScore = 0;

    function playRound(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            console.log("It's a tie!");
        } else {
            switch(userChoice) {
                case answers[0]:
                    computerChoice === answers[1] ? computerScore++ : userScore++;
                    break;
                case answers[1]:
                    computerChoice === answers[0] ? userScore++ : computerScore++;
                    break;
                case answers[2]:
                    computerChoice === answers[1] ? userScore++ : computerScore++;
                    break;
            }
        }
    }

    console.log("Game started!");

    for (let rounds = 1; rounds < 6; rounds++) {
        console.log("Round " + rounds);
        const userSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        console.log("User Choice: " + userSelection)
        console.log("Computer Choice: " + computerSelection)
        playRound(userSelection, computerSelection);
        console.log("User score: " + userScore);
        console.log("Computer score: " + computerScore);
    }

    console.log("End Game!");
}

playGame();