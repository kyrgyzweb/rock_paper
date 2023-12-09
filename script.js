// User choice Function

const getUserChoice = (userInput) => {
    
    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'scissor' || userInput === 'paper') {
        return userInput;
    } else {
        return 'You entered wrong number!';
    }
}

// DOM for Use choice

// Computer Choice Function
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissor';
            break;
    }
}

// Dom for Computer Choice;





// DetermineWinner Function

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        return 'Game is tie!';
    }

    if(userChoice === 'rock') {
        if(computerChoice === 'paper') {
            return 'Computer won!';
        } else {
            return 'User won!';
        }
    }
    if(userChoice === 'paper') {
        if(computerChoice === 'rock') {
            return 'User won!';
        } else {
            return 'Computer won!'
        }
    }

    if(userChoice === 'scissor') {
        if(computerChoice === 'paper') {
            return 'User won!';
        } else {
            return 'Computer won!'
        }
    }
}

// Play Game final

const playGame = () => {
    const computer = getComputerChoice();
    let komp = document.getElementById('compText');
    komp.innerHTML = computer;

    const user = getUserChoice(prompt('Enter your choice! "rock", "paper" or "scissor"'));
    let us = document.getElementById('userText');
    us.innerHTML = user;


let final = document.getElementById('final');
final.innerHTML = determineWinner(user, computer);
}

let knopka = document.getElementById('start-button');
knopka.addEventListener('click', playGame);