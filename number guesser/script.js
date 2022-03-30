let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};
let computerGuess = generateTarget();

const compareGuesses = (userGuess, computerGuess, secretTargetNumber) => {
  if (
    userGuess === secretTargetNumber - 1 ||
    (userGuess === secretTargetNumber && computerGuess > secretTargetNumber)
  ) {
    return true;
  } else if (
    computerGuess === secretTargetNumber - 1 ||
    (computerGuess === secretTargetNumber && userGuess > secretTargetNumber)
  ) {
    return false;
  } else if (computerGuess === userGuess) {
    return true;
  } else {
    return true;
  }
};

const updateScore = (value) => {
  if ((value = "human")) {
    humanScore++;
  } else if ((value = "computer")) {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
