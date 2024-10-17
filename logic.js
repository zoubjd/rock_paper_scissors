const choices = ['rock', 'paper', 'scissors'];

var humanScore = 0;
var computerScore = 0;
var rounds = 0;
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("sci");
let huScH = document.getElementById("humanScore");
let cmpScH = document.getElementById("CompScore");
let winner = document.getElementById("winner");
huScH.textContent = `HumanScore: ${humanScore}`;
cmpScH.textContent = `ComputerScore: ${computerScore}`;
let won = document.getElementById("won");


function getwinner() {
    if (humanScore > computerScore)
    {
        won.textContent = (`You WON!!!!, ${humanScore} to ${computerScore}`);
    }
    else if (humanScore < computerScore) {
        won.textContent = (`You Lost!, ${computerScore} to ${humanScore}`);
    }
    else {
        won.textContent = "it's actually a TIE!!";
    }
    endGame();
}

function endGame() {
    humanScore = 0;
    computerScore = 0;
    huScH.textContent = `HumanScore: ${humanScore}`;
    cmpScH.textContent = `ComputerScore: ${computerScore}`;
    winner.textContent = "Choose YOU'RE PLAY";
}

function  clickedrock() {
    playRound("rock");
}
function  clickedpaper() {
    playRound("paper");
}
function  clickedscissor() {
    playRound("scissors");
}

const rules = {
    rock: { scissors: 'win', paper: 'lose' },
    paper: { rock: 'win', scissors: 'lose' },
    scissors: { paper: 'win', rock: 'lose' }
};


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(humanChoice) {
    //let humanChoice = getHumanChoice();
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
            huScH.textContent = `HumanScore: ${humanScore}`;
        }
        else {
            alert(`You Lost!, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            cmpScH.textContent = `ComputerScore: ${computerScore}`;
        }
    }
    rounds++;
    if (rounds === 5)
    {
        getwinner();
    }
}

/*function playGame() {
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
*/
