let secretNumber;
let remainingGuesses = 10;

document.getElementById("setButton").addEventListener("click", function() {
    let userNumber = parseInt(document.getElementById("setNumber").value);
    if (userNumber >= 1 && userNumber <= 100) {
        secretNumber = userNumber;
        document.getElementById("setNumber").disabled = true;
        document.getElementById("setNumber").value = ""; 
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

document.getElementById("resetButton").addEventListener("click", function() {
document.getElementById("setNumber").disabled = false;
document.getElementById("setNumber").value = "";
document.getElementById("userGuess").value = "";
document.getElementById("setButton").disabled = false;
document.getElementById("guessButton").disabled = false;
document.getElementById("resetButton").disabled = true;
document.getElementById("message").textContent = "";
document.getElementById("resultLabel").style.display = "none";
document.getElementById("userGuess").disabled = false;
document.getElementById("guessButton").disabled = false;
document.getElementById("resetButton").disabled = false;
document.getElementById("hint").value = "";


remainingGuesses = 10;
document.getElementById("guessesLeft").textContent = remainingGuesses;
})
    

document.getElementById("guessButton").addEventListener("click", function() {
    let userGuess = parseInt(document.getElementById("userGuess").value);
    document.getElementById("userGuess").value = "";
    if (userGuess >= 1 && userGuess <= 100) {
        remainingGuesses--;
        document.getElementById("guessesLeft").textContent = remainingGuesses;
        
        if (userGuess === secretNumber) {
            document.getElementById("message").textContent = `Congratulations! You guessed the correct number: ${secretNumber}`;
            document.getElementById("userGuess").disabled = true;
            document.getElementById("guessButton").disabled = true;
            document.getElementById("hint").textContent = "";
        } else {
            if (userGuess < secretNumber) {
                document.getElementById("hint").textContent = "Hint: The number should be higher.";
            } else {
                document.getElementById("hint").textContent = "Hint: The number should be lower.";
            }

            if (remainingGuesses === 0) {
                document.getElementById("message").textContent = `Out of guesses! The number was ${secretNumber}.`;
                document.getElementById("userGuess").disabled = true;
                document.getElementById("guessButton").disabled = true;
            }
        }
    } else {
        alert("Please enter a valid guess between 1 and 100.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById("timer");
    let countdown = 20;

    function updateTimer() {
        timerElement.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(interval);
            timerElement.textContent = "Time's up!";
            document.getElementById("guessButton").disabled = true;
            document.getElementById("userGuess").disabled = true;
        }
    }

    updateTimer(); 
    const interval = setInterval(updateTimer, 1000);
});


