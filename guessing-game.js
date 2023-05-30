function guessingGame() {
    // Generating a random number between 0 and 99
    let secretNumber = Math.floor(Math.random() * 100);
    
    // Flag to check if the game is over
    let isGameOver = false;
    
    // Counter to keep track of the number of guesses
    let guesses = 0;

    // Returning the game function
    return function(guess) {
        // Incrementing the number of guesses
        guesses++;
        
        // Checking if the game is over
        if (isGameOver) {
            return "The game is over, you already won!";
        }
        
        // Checking if the guessed number is too high, too low, or correct
        if (guess > secretNumber) {
            return guess + " is too high!";
        } else if (guess < secretNumber) {
            return guess + " is too low!";
        } else {
            // Marking the game as over after a correct guess
            isGameOver = true;
            return "You win! You found " + secretNumber + " in " + guesses + " guesses.";
        }
    };
}


module.exports = { guessingGame };
