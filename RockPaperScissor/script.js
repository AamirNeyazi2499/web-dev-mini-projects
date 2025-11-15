const choices = document.querySelectorAll('.choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const drawsDisplay = document.getElementById('draws');
const resetButton = document.getElementById('reset');

let wins = 0;
let losses = 0;
let draws = 0;

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) return 'draw';
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}

function playGame(event) {
    const playerChoice = event.target.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    playerChoiceDisplay.textContent = `Your choice: ${playerChoice}`;
    computerChoiceDisplay.textContent = `Computer's choice: ${computerChoice}`;

    if (result === 'win') {
        resultDisplay.textContent = 'Result: You win!';
        wins++;
        winsDisplay.textContent = wins;
    } else if (result === 'lose') {
        resultDisplay.textContent = 'Result: You lose!';
        losses++;
        lossesDisplay.textContent = losses;
    } else {
        resultDisplay.textContent = 'Result: It\'s a draw!';
        draws++;
        drawsDisplay.textContent = draws;
    }
}

function resetScore() {
    wins = 0;
    losses = 0;
    draws = 0;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawsDisplay.textContent = draws;
    playerChoiceDisplay.textContent = 'Your choice: ';
    computerChoiceDisplay.textContent = " 'Computer's choice: ' ";
    resultDisplay.textContent = 'Result: ';
}

choices.forEach(choice => choice.addEventListener('click', playGame));
resetButton.addEventListener('click', resetScore);