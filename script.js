//Deal 2 cards to player and dealer
//If ace in cards, can be 1 or 11
//J,Q,K are 10 pts
//While player's cards less than 21, let player choose hit or stand
//If player >21 points, auto lose
//THEN If player stand/ or cards > 21, dealer hit or stand
//If dealer < 17, must hit.
//If dealer > 21, dealer lose

var deck = [
  {
    name: "ace",
    suit: "hearts",
    rank: 1
  },
  {
    name: "2",
    suit: "hearts",
    rank: 2
  },
  {
    name: "3",
    suit: "hearts",
    rank: 3
  },
  {
    name: "4",
    suit: "hearts",
    rank: 4
  },
  {
    name: "5",
    suit: "hearts",
    rank: 5
  },
  {
    name: "6",
    suit: "hearts",
    rank: 6
  },
  {
    name: "7",
    suit: "hearts",
    rank: 7
  },
  {
    name: "8",
    suit: "hearts",
    rank: 8
  },
  {
    name: "9",
    suit: "hearts",
    rank: 9
  },
  {
    name: "10",
    suit: "hearts",
    rank: 10
  },
  {
    name: "jack",
    suit: "hearts",
    rank: 11
  },
  {
    name: "queen",
    suit: "hearts",
    rank: 12
  },
  {
    name: "king",
    suit: "hearts",
    rank: 13
  },
  {
    name: "ace",
    suit: "diamonds",
    rank: 1
  },
  {
    name: "2",
    suit: "diamonds",
    rank: 2
  },
  {
    name: "3",
    suit: "diamonds",
    rank: 3
  },
  {
    name: "4",
    suit: "diamonds",
    rank: 4
  },
  {
    name: "5",
    suit: "diamonds",
    rank: 5
  },
  {
    name: "6",
    suit: "diamonds",
    rank: 6
  },
  {
    name: "7",
    suit: "diamonds",
    rank: 7
  },
  {
    name: "8",
    suit: "diamonds",
    rank: 8
  },
  {
    name: "9",
    suit: "diamonds",
    rank: 9
  },
  {
    name: "10",
    suit: "diamonds",
    rank: 10
  },
  {
    name: "jack",
    suit: "diamonds",
    rank: 11
  },
  {
    name: "queen",
    suit: "diamonds",
    rank: 12
  },
  {
    name: "king",
    suit: "diamonds",
    rank: 13
  },
  {
    name: "ace",
    suit: "clubs",
    rank: 1
  },
  {
    name: "2",
    suit: "clubs",
    rank: 2
  },
  {
    name: "3",
    suit: "clubs",
    rank: 3
  },
  {
    name: "4",
    suit: "clubs",
    rank: 4
  },
  {
    name: "5",
    suit: "clubs",
    rank: 5
  },
  {
    name: "6",
    suit: "clubs",
    rank: 6
  },
  {
    name: "7",
    suit: "clubs",
    rank: 7
  },
  {
    name: "8",
    suit: "clubs",
    rank: 8
  },
  {
    name: "9",
    suit: "clubs",
    rank: 9
  },
  {
    name: "10",
    suit: "clubs",
    rank: 10
  },
  {
    name: "jack",
    suit: "clubs",
    rank: 11
  },
  {
    name: "queen",
    suit: "clubs",
    rank: 12
  },
  {
    name: "king",
    suit: "clubs",
    rank: 13
  },
  {
    name: "ace",
    suit: "spades",
    rank: 1
  },
  {
    name: "2",
    suit: "spades",
    rank: 2
  },
  {
    name: "3",
    suit: "spades",
    rank: 3
  },
  {
    name: "4",
    suit: "spades",
    rank: 4
  },
  {
    name: "5",
    suit: "spades",
    rank: 5
  },
  {
    name: "6",
    suit: "spades",
    rank: 6
  },
  {
    name: "7",
    suit: "spades",
    rank: 7
  },
  {
    name: "8",
    suit: "spades",
    rank: 8
  },
  {
    name: "9",
    suit: "spades",
    rank: 9
  },
  {
    name: "10",
    suit: "spades",
    rank: 10
  },
  {
    name: "jack",
    suit: "spades",
    rank: 11
  },
  {
    name: "queen",
    suit: "spades",
    rank: 12
  },
  {
    name: "king",
    suit: "spades",
    rank: 13
  }
];

var playerCardsArray = [];
var dealerCardsArray = [];
var gameMode = "start";

var getRandomCard = function () {
  var randomCard = deck[Math.floor(Math.random() * deck.length)];
  return randomCard;
};

var formatCardsArray = function (cardsArray) {
  var formattedCardsArray = "";
  var cardsArrayExcludingFirst = "";
  var firstCard = `${cardsArray[0].name} of ${cardsArray[0].suit}`;
  for (var index = 1; index < cardsArray.length; index += 1) {
    var currentCard = `${cardsArray[index].name} of ${cardsArray[index].suit}`;
    //console.log(currentCard);
    cardsArrayExcludingFirst += ", " + currentCard;
    //console.log(cardsArrayExcludingFirst);
    formattedCardsArray = firstCard + cardsArrayExcludingFirst;
  }
  return formattedCardsArray;
};

var formatDealerCardsArray = function (cardsArray) {
  var formattedDealerCardsArray = "";
  var cardsArrayExcludingFirst = "";
  var firstCard = `Hidden card`;
  for (var index = 1; index < cardsArray.length; index += 1) {
    var currentCard = `${cardsArray[index].name} of ${cardsArray[index].suit}`;
    //console.log(currentCard);
    cardsArrayExcludingFirst += ", " + currentCard;
    //console.log(cardsArrayExcludingFirst);
    formattedDealerCardsArray = firstCard + cardsArrayExcludingFirst;
  }
  return formattedDealerCardsArray;
};

//practice popping (removing) the cards!
//AND Shuffle card deck

var dealCard = function (cardsArray) {
  cardsArray.push(getRandomCard());
};

var addPoints = function (cardsArray) {
  for (var index = 0; index < cardsArray.length; index += 1) {
    if (
      //OR, create extra key that's called points.
      cardsArray[index].name === "jack" ||
      cardsArray[index].name === "queen" ||
      cardsArray[index].name === "king"
    ) {
      cardsArray[index].name = 10;
    }
    if (cardsArray[index].name === "ace") {
      cardsArray[index].name = 11;
    }
  }
  var points = 0;
  for (index = 0; index < cardsArray.length; index += 1) {
    points += Number(cardsArray[index].name);
    //if points > 21
    if (points > 21) {
      for (index = 0; index < cardsArray.length; index += 1) {
        if (cardsArray[index].name === 11) {
          cardsArray[index].name = 1;
        }
      }
      points = 0;
      for (index = 0; index < cardsArray.length; index += 1) {
        points += Number(cardsArray[index].name);
        //if points > 21
      }
    }
  }
  return points;
};

var playerPoints = addPoints(playerCardsArray);
var dealerPoints = addPoints(dealerCardsArray);
var outputMessage = "";

var comparePoints = function (playerPoints, dealerPoints) {
  if (playerPoints > dealerPoints && playerPoints < 22) {
    outputMessage = `You have ${playerPoints} points. The dealer has ${dealerPoints} points. You win! <br>Refresh the page to start a new game.`;
  }
  if (playerPoints < dealerPoints && dealerPoints < 22) {
    outputMessage = `You have ${playerPoints} points. The dealer has ${dealerPoints} points. You lose! <br>Refresh the page to start a new game.`;
  }
  if (playerPoints === dealerPoints) {
    outputMessage = `You have ${playerPoints} points. The dealer has ${dealerPoints} points. It's a tie! <br>Refresh the page to start a new game.`;
  }
  if (playerPoints > 21) {
    outputMessage = `You have ${playerPoints} points. That's more than 21! You lose! <br>Refresh the page to start a new game.`;
  }
  if (dealerPoints > 21 && playerPoints < 22) {
    outputMessage = `The dealer has ${dealerPoints} points. That's more than 21! You have ${playerPoints} points. You win! <br>Refresh the page to start a new game.`;
  }
};

playerCardsArray.push(getRandomCard(), getRandomCard());
dealerCardsArray.push(getRandomCard(), getRandomCard());

var main = function (input) {
  if (gameMode == "start") {
    outputMessage = `Welcome to Blackjack!<br><br>
  Your cards are ${formatCardsArray(playerCardsArray)}.<br>
  You currently have ${addPoints(playerCardsArray)} points.<br><br>
  The Dealer's cards are ${formatDealerCardsArray(dealerCardsArray)}.<br>
  The Dealer currently has ${addPoints(dealerCardsArray)} points.<br><br>`;
    //be careful not to add extra brackets to close the condition!
    if (addPoints(playerCardsArray) === 21) {
      outputMessage +=
        "You've won! Congratulations! Refresh the page to start a new game.";
      return outputMessage;
    }
    if (addPoints(playerCardsArray) < 21) {
      outputMessage += `Type "hit" to draw another card, or "stand" for the dealer's turn.`;
      gameMode = "choose";
      //console.log(gameMode);
      return outputMessage;
    }
  }
  if (gameMode == "choose") {
    if (input == "hit") {
      dealCard(playerCardsArray);
      //console.log(playerCardsArray);
      outputMessage = `You drew a card.<br>
       Your cards are ${formatCardsArray(playerCardsArray)}.<br>
       You currently have ${addPoints(playerCardsArray)} points.`;
      if (addPoints(playerCardsArray) === 21) {
        outputMessage +=
          "You've won! Congratulations! Refresh the page to start a new game.";
        return outputMessage;
      }
      if (addPoints(playerCardsArray) !== 21) {
        outputMessage += `<br>Type "hit" to draw another card, or "stand" for the dealer's turn.`;
        gameMode = "choose";
        //console.log(gameMode);
        return outputMessage;
      }
      //return outputMessage;
    }
    playerPoints = addPoints(playerCardsArray);
    if (input === "stand") {
      //console.log(input);
      while (addPoints(dealerCardsArray) < 17) {
        dealCard(dealerCardsArray);
        console.log(dealerCardsArray);
      }
      //outputMessage = `The dealer's cards are ${formatCardsArray(dealerCardsArray)}.<br>The dealer has ${addPoints(dealerCardsArray)} points.`;
      dealerPoints = addPoints(dealerCardsArray);
      gameMode = "compare";
      //return outputMessage;
    }
  }
  if (gameMode == "compare") {
    comparePoints(playerPoints, dealerPoints);
    return outputMessage;
  }
};
