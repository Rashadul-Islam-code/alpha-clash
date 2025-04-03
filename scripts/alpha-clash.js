// function play(){
//     // Step-01:  Hide the Home Screen. (To Hide the screen we must add the class hidden to the Home Screen.)
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // Step-02: Show the Playground Screen
//     const playgroundSection = document.getElementById('playground-section');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    // console.log(playerPressed);
    // Stop the game if pressed Esc
    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){
        console.log('You get a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);






        // _________________________________________________________________________________
        // // Update Score
        // // Step-01:Get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        

        // // Step-02: Increase the score by 1
        // const newScore = currentScore + 1;

        // // Step-03: Show the updated score
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('You missed!!!');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife);

        if(updatedLife === -1){
            gameOver();
        }



        // _________________________________________________________________________________
        // // Update Life count
        // // Step-01: Get the current life count
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // Step-02: Reduce the life count
        // const updatedLife = currentLife -1;
        // // Step-03: Display the updated life count
        // currentLifeElement.innerText = updatedLife;
    }
}
// Capture Keyboard key Press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    // Step-01: Generate a random alphabet
    const alphabet = getARandomAlphabet();

    // Step-02: Set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // Step-03: Set background color
    setBackgroundColorById(alphabet);
}

function play(){
    // Step-01: Hide everything and show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('playground-section');

    // Step-02: Reset Score and Life
    setTextElementValueById('current-life', 3);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('playground-section');
    showElementById('final-score');
    // Update Final Score
    // Step-01: Get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);
    

    // Clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}




// function getARandomAlphabet(){
//     // Create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');

//     // Get a random index between 0-25
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
    
//     const alphabet = alphabets[index];
//     console.log(index, alphabet); 
//     return alphabet;

// }
