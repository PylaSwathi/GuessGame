let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let content=document.getElementById("contentDisplay");

let count = 0;
let attempts = 3;

function checkGuess() {
    if (attempts > 0) {
        let guessedNumber = parseInt(userInput.value);
        let randomNumber = Math.ceil(Math.random() * 9000) + 1000;
        let sub = guessedNumber-randomNumber;

        if (!isNaN(guessedNumber)) {
            if (sub >= 0) {
                count+=10;
            } else {
                count-=10;
            }

            attempts--;

            if (attempts > 0) {
                content.textContent = `Attempts left: ${attempts}`;
                content.style.backgroundColor = "#1e217c";
            } else {
                content.textContent="Attempts Over! "
                displayResult();
            }
        } else {
            content.textContent = "Please enter a valid number.";
            content.style.backgroundColor = "#e74c3c";
        }

        userInput.value = ""; // Clear the input field
    }
}
    

  

function displayResult(){


    if(count>0){
        gameResult.textContent="You win the game and course is "+count;
        gameResult.style.backgroundColor="#008000";
    }
    else{
        gameResult.textContent="Oops! You lose the game !";
        gameResult.style.backgroundColor="#FF0000";
        

    }
}