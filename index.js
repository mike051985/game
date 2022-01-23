const computerDisplay = document.getElementById('computer-play');
const userDisplay = document.getElementById('user-play');
const resultDisplay = document.getElementById('result');
const possiblePlays = document.querySelectorAll('button');
let userPlay;
let computerPlay;
let result;

possiblePlays.forEach(possiblePlay => possiblePlay.addEventListener('click', (e) => {
    userPlay = e.target.id;
    userDisplay.textContent = userPlay;
    generateComputerPlay();
    getResult(); 
}));

function generateComputerPlay() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1) {
        computerPlay = 'rock';
    }
    if(randomNumber === 2) {
        computerPlay = 'scissors';
    }
    if(randomNumber === 3) {
        computerPlay = 'paper';
    }
    computerDisplay.textContent = computerPlay;
}

function getResult() {
    if (computerPlay === userPlay) {
        result = 'It is a draw!';
    }
    if (computerPlay === 'rock' && userPlay === 'paper') {
        result = 'You win!';
    }
    if (computerPlay === 'rock' && userPlay === 'scissors') {
        result = 'You lose';
    }
    if (computerPlay === 'paper' && userPlay === 'scissors') {
        result = 'You win!';
    }
    if (computerPlay === 'paper' && userPlay === 'rock') {
        result = 'You lose!';
    }
    if (computerPlay === 'scissors' && userPlay === 'rock') {
        result = 'You win!';
    }
    if (computerPlay === 'scissors' && userPlay === 'paper') {
        result = 'You lose!';
    }
    resultDisplay.textContent = result;
}