

// a function named computerPlay that returns one of the three 'Rock', 'Paper' or 'Scissors' randomly.
// Rock equals 0, paper equals 1 and scissors equal 2

function computerPlay() {
    // assign a variable named picked a random number from 0 to 2 [0,2]
    let picked = random(2);
    // check to see which which number was generated
    // return corresponding word as string
    console.log(picked);
    return (picked === 0) ? 'Rock' : (picked === 1) ? 'Paper' : 'Scissors';
}

// a function named random that takes a number(int) a and return a random number(int) from 0 to a.
function random(a) {
    return Math.floor(Math.random() * (a + 1));
}

// Global score variables 
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// a function named playRound that takes two inputs from the user and the computer and returns a number that tells the user
// if they won or lost or draw.

// the function should take a string as the first argument representing the user input and a string for the second argument
// representing the computer input.

function playRound(userInput, computerInput) {
    // make booth inputs lowercase

    userInput = userInput.toLowerCase();
    computerInput = computerInput.toLowerCase();
    const score = document.querySelector('h2');

    // check if userInput and computerInput are the same .
    // if they are equal return 'Draw! userInput , computerInput'.

    // check userInput 
    // if input equals rock
        // check if computerInput is paper
        // if paper return 'You Lose! Paper beats Rock'
        // else return 'You Win! Rock beats Paper'
    // else if input equals paper
        // check if computerInput is scissors
        // if scissors return 'You Lose! Scissors beats Paper'
        // else return 'You Win! Paper beats Rock'
    // if input equals Scissors
        // check if computerInput is Rock
        // if paper return 'You Lose! Rock beats Scissors'
        // else return 'You Win! Scissors beats Paper'
    if(userInput === computerInput) {
        score.textContent = `Draw! ${userInput} , ${computerInput}`;
    }
    else if(userInput === 'rock') {
        if(computerInput === 'paper') {
            score.textContent = 'You Lose! Paper beats Rock';
            computerScore += 1;
        }
        else {
            score.textContent = 'You Win! Rock beats Scissors';
            playerScore += 1;
        }
    }
    else if(userInput === 'paper') {
        if(computerInput === 'scissors') {
            score.textContent = 'You Lose! Scissors beats Paper';
            computerScore += 1;
        }
        else {
            score.textContent = 'You Win! Paper beats Rock';
            playerScore += 1;
        }
    }
    else {
        if(computerInput === 'rock') {
            score.textContent = 'You Lose! Rock beats Scissors';
            computerScore += 1;
        }
        else {
            score.textContent = 'You Win! Scissors beats Paper';
            playerScore += 1;
        }
    }
    updateText();

    roundsPlayed += 1;

    if(roundsPlayed >= 5){
        printWinner();
        resetGame();
    }

}


function updateText() {
    const scoreText = document.querySelector('.scoreText');
    scoreText.textContent = `Player Points ${playerScore}, Computer Points ${computerScore}`;
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
}

function printWinner(){
    const text = document.querySelector('h2');
    if(computerScore === playerScore){
        text.textContent = 'Draw! No Winners \uD83D\uDE1B';
    }
    else if(playerScore > computerScore){
        text.textContent = 'Player Wins \uD83D\uDE03';
    }
    else {
        text.textContent = 'Computer Wins \uD83D\uDE22';
    }
}


const cards = document.querySelectorAll('.cardElement');
const resetButton = document.querySelector('button');

resetButton.addEventListener('click', () => {
    const text = document.querySelector('h2');
    resetGame();
    updateText();
    text.textContent = 'Play again';
});


cards.forEach((c) => {
    c.addEventListener('mouseover',(ev) =>{
        ev.target.classList.add('cardHover');
        ev.target.style.backgroundSize = '62.5px 93.75px';
        const para = ev.target.firstElementChild;
        para.style.fontSize = '1.875em';
        
    });
    c.addEventListener('mouseout',(ev) =>{
        ev.target.classList.remove('cardHover');
        ev.target.style.backgroundSize = '50px 75px';
        const para = ev.target.firstElementChild;
        para.style.fontSize = '1.5em';
    });

    c.addEventListener('mousedown',(ev) =>{
        const computerInput = computerPlay();
        if(ev.target.id === 'rock'){
            ev.target.style.opacity = '80%';
            playRound('rock', computerInput);
        }
        else if(ev.target.id === 'paper'){
            playRound('paper', computerInput);
            ev.target.style.opacity = '80%';
        }
        else {
            playRound('scissors', computerInput);
            ev.target.style.opacity = '80%';
        }
    });

    c.addEventListener('mouseup',(ev) =>{
        ev.target.style.opacity = '100%';
    });

    
});
