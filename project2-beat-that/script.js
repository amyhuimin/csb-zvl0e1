var rollDice = function () {
  // produce a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;
  // remove the decimal
  var randomInteger = Math.floor(randomDecimal);
  // add 1 to get a number between 1 and 6 inclusive
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var gameMode = "start1";
var currentPlayer = "Player 1";
var diceOne = 0;
var diceTwo = 0;
var finalNumber = 0;
var outputMessage = "";
var playerOnePoints = 0;
var playerTwoPoints = 0;
//Must make sure to have global variables first so that the function can store the variables!

var chooseOrder = function (input) {
  if (Number(input) == 1) {
    console.log("input is 1");
    finalNumber = diceOne + diceTwo;
    outputMessage = `${currentPlayer}, you chose ${input}. Your final number is ${finalNumber}.`;
  } else if (Number(input) == 2) {
    console.log("input is 2");
    finalNumber = diceTwo + diceOne;
    outputMessage = `${currentPlayer}, you chose ${input}. Your final number is ${finalNumber}.`;
  } else if (input != 1 || input != 2) {
    outputMessage = `Please enter 1 or 2.`;
  }
};

var rollTwoDice = function () {
  diceOne = String(rollDice());
  diceTwo = String(rollDice());
  console.log(diceOne + diceTwo);
  console.log(gameMode);
  outputMessage = `🎲 ${currentPlayer}: 🎲
  <br>You rolled ${diceOne} for dice one and ${diceTwo} for dice two.
  <br>Choose the order of the dice by entering "1" or "2".`;
};

var compare = function (playerOnePoints, playerTwoPoints) {
  if (playerOnePoints > playerTwoPoints) {
    outputMessage = `Player 1 has ${playerOnePoints} points. Player 1 is leading!`;
  } else if (playerTwoPoints > playerOnePoints) {
    outputMessage = `Player 2 has ${playerTwoPoints} points. Player 2 is leading!`;
  } else if (playerOnePoints == playerTwoPoints) {
    outputMessage = `It's a tie!`;
  }
};

var main = function (input) {
  if (gameMode == "start1") {
    rollTwoDice();
    gameMode = "order1";
    return outputMessage;
  }
  if (gameMode == "order1") {
    console.log(gameMode);
    chooseOrder(input);
    playerOnePoints = playerOnePoints + Number(finalNumber);
    console.log(playerOnePoints);
    gameMode = "start2";
    return outputMessage;
  }
  if (gameMode == "start2") {
    currentPlayer = "Player 2";
    console.log(gameMode);
    console.log(currentPlayer);
    rollTwoDice();
    gameMode = "order2";
    return outputMessage;
  }
  if (gameMode == "order2") {
    console.log(gameMode);
    chooseOrder(input);
    playerTwoPoints = playerTwoPoints + Number(finalNumber);
    console.log(playerTwoPoints);
    gameMode = "compare points";
    return outputMessage;
  }
  if (gameMode == "compare points") {
    console.log(gameMode);
    compare(playerOnePoints, playerTwoPoints);
    currentPlayer = "Player 1";
    gameMode = "start1";
    return outputMessage;
  }
};
