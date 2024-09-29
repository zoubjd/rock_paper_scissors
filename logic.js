const choices = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

const rules = {
    rock: { scissors: 'win', paper: 'lose' },
    paper: { rock: 'win', scissors: 'lose' },
    scissors: { paper: 'win', rock: 'lose' }
};


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice() {
    while (true) {
        let choice = prompt("Enter Your Choice!").toLowerCase();
        
        if (choices.includes(choice)) {//includes works just line is in in py
            return choice;
        } else {
            alert("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
        }
    }
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice)
    {
        alert("It's a Tie!!");
    }
    else
    {
        const outcome = rules[humanChoice][computerChoice];

        if (outcome === "win") {
            alert(`You WON!!!!, ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else {
            alert(`You Lost!, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }
}

function playGame() {
    for(let i = 0; i < 5; i++)
    {
        playRound();
    }
    if (humanScore > computerScore)
    {
        alert(`You WON!!!!, ${humanScore} to ${computerScore}`);
    }
    else{
        alert(`You Lost!, ${computerScore} beats ${humanScore}`);
    }
}
playGame();

