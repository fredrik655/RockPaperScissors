

// a function named computerPlay that returns one of the three 'Rock', 'Paper' or 'Scissors' randomly.
// Rock equals 0, paper equals 1 and scissors equal 2

function computerPlay() {
    // assign a variable named picked a random number from 0 to 2 [0,2]
    let picked = random(2);
    // check to see which which number was generated
    // return corresponding word as string
    return (picked === 0) ? 'Rock' : (picked === 1) ? 'Paper' : 'Scissors';
}

// a function named random that takes a number(int) a and return a random number(int) from 0 to a.
function random(a) {
    return Math.floor(Math.random() * (a + 1));
}

// a function named playRound that takes two inputs from the user and the computer and returns a number that tells the user
// if they won or lost or draw.

// the function should take a string as the first argument representing the user input and a string for the second argument
// representing the computer input.

function playRound(userInput, computerInput) {
    // make booth inputs lowercase

    userInput = userInput.toLowerCase();
    computerInput = computerInput.toLowerCase();

    // check if userInput and computerInput are the same .
    // if they are equal return 'Draw! userInput , computerInput'.

    if(userInput === computerInput) {
        console.log(`Draw! ${userInput} , ${computerInput}`);
        return [1, 1];
    }

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

    if(userInput === 'rock') {
        if(computerInput === 'paper') {
            console.log('You Lose! Paper beats Rock');
            return [0, 1];
        }
        else {
            console.log('You Win! Rock beats Scissors');
            return [1, 0];
        }
    }
    else if(userInput === 'paper') {
        if(computerInput === 'scissors') {
            console.log('You Lose! Scissors beats Paper');
            return [0, 1];
        }
        else {
            console.log('You Win! Paper beats Rock');
            return [1, 0];
        }
    }
    else {
        if(computerInput === 'rock') {
            console.log('You Lose! Rock beats Scissors');
            return [0, 1];
        }
        else {
            console.log('You Win! Scissors beats Paper');
            return [1, 0];
        }
    }
}

// the main function named game that plays five rounds of rock paper scissors the exits
function game() {
    // initialize win counter for both player and computerScore
    let playerScore = 0;
    let computerScore = 0;
    
    // make a loop that ::: (loop 5 times)

    for(let i = 0; i < 5; i++) {
        // ask the user for the input rock paper or scissors as a string
        const playerSelection = prompt('Choose Rock Paper or Scissors!');
        // generates a computer string value with computerPlay function
        const computerSelection = computerPlay();
        // use playRound function with the two values and increment the result of playerScore and computerScore
        let tempValue = playRound(playerSelection, computerSelection);
        playerScore += tempValue[0];
        computerScore += tempValue[1];
    }
    console.log(playerScore);
    // prints game finished when loop is done and log if player won if playerScore is larger then 2
    (playerScore > computerScore) ? console.log('You Won Yay!!!') : (playerScore === computerScore) ? console.log('Draw!!!') : console.log('You Lose!!!');
}

game();