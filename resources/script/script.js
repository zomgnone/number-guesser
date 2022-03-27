let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// This function will be called at the start of each new round 
// in order to generate the new secret target number.
const generateTarget = () => Math.floor(Math.random() * 10);

// This function will calculate absolute distance between two numbers.
const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

// This function will be called each round to determine 
// which guess is closest to the target number.
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  const humanDistance = getAbsoluteDistance(humanGuess, targetNumber);
  const computerDistance = getAbsoluteDistance(computerGuess, targetNumber);
  // Return true if human wins; return false if computer wins.
  return humanDistance < computerDistance ? true : false;
}

// This function will be used to correctly increase 
// the winner’s score after each round.
const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  }
  if (winner === 'computer') {
    computerScore++;
  }
}

// This function will be used to update the round number after each round.
const advanceRound = () => currentRoundNumber++;
