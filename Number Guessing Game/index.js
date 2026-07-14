//Number guessing game

const StartBtn = document.getElementById("start");
const SubmitBtn = document.getElementById("submit");
const Result = document.getElementById("result");

let number;
let guesses;
let attempt;
let min;
let max;

StartBtn.onclick = function(){

    guesses = 2;
    attempt = 1; 

    max = Number(document.getElementById("max").value);
    min = Number(document.getElementById("min").value);

    

    const AttemptsNumber = document.getElementById("attempts");
    const RemainingGuesses = document.getElementById("guesses");

    AttemptsNumber.textContent = `Attempt : ${attempt}`
    RemainingGuesses.textContent = `Remaining Guesses : ${guesses}` 

    number = Math.floor((Math.random()*(max-min+1)) + min);

    Result.textContent = ``;

    StartBtn.textContent = `Restart`;

}


SubmitBtn.onclick = function(){

    const InputValue = Number(document.getElementById("input").value);
    const AttemptsNumber = document.getElementById("attempts");
    const RemainingGuesses = document.getElementById("guesses");

    AttemptsNumber.textContent = `Attempt : ${attempt}`
    RemainingGuesses.textContent = `Remaining Guesses : ${guesses}`    
    

    if (guesses>0 && (min<=max)){
        
        if (InputValue === number){

            Result.textContent = `Correct Guess! The number was ${number}`;

        }

        else{

            Result.textContent = `Incorrect Guess!`;
            guesses--;
            attempt++;

            AttemptsNumber.textContent = `Attempt : ${attempt}`
            RemainingGuesses.textContent = `Remaining Guesses : ${guesses}`

            if (attempt>=3){

                attempt = 3;
            }

        }

    }

    if (guesses<0){

        Result.textContent = `Out of guesses!`;
    }

}



