//Deal 2 cards to player and dealer
//If ace in cards, can be 1 or 11
//J,Q,K are 10 pts
//While player's cards less than 21, let player choose hit or stand
//If player >21 points, auto lose
//THEN If player stand/ or cards > 21, dealer hit or stand
//If dealer < 17, must hit.
//If dealer > 21, dealer lose
//HELLOOOO
document.querySelector("#hit-button").disabled = true;
document.querySelector("#stand-button").disabled = true;

var getRandomIndex = function (size) {
  return Math.floor(Math.random() * size);
};

var shuffleCards = function (cards) {
  var index = 0;
  while (index < cards.length) {
    var randomIndex = getRandomIndex(cards.length);
    var currentItem = cards[index];
    var randomItem = cards[randomIndex];
    cards[index] = randomItem;
    cards[randomIndex] = currentItem;
    index = index + 1;
  }
  return cards;
};

var makeDeck = function () {
  var cardDeck = [];
  var suits = ["♥", "♠", "♣", "♠"];
  for (var i = 0; i < suits.length; i += 1) {
    var currentSuit = suits[i];
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      var cardName = rankCounter;
      if (cardName == 1) {
        cardName = "Ace";
      } else if (cardName == 11) {
        cardName = "Jack";
      } else if (cardName == 12) {
        cardName = "Queen";
      } else if (cardName == 13) {
        cardName = "King";
      }
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };
      cardDeck.push(card);
    }
  }
  return cardDeck;
};
var deck = shuffleCards(makeDeck());
var playerCardsArray = [];
var dealerCardsArray = [];
var gameMode = "start";

var getRandomCard = function () {
  var randomCard = deck.pop();
  return randomCard;
};

var formatCardsArray = function (cardsArray) {
  var formattedCardsArray = "";
  var cardsArrayExcludingFirst = "";
  var firstCard = `${cardsArray[0].name} of ${cardsArray[0].suit}`;
  for (var index = 1; index < cardsArray.length; index += 1) {
    var currentCard = `${cardsArray[index].name} of ${cardsArray[index].suit}`;
    cardsArrayExcludingFirst += " and " + currentCard;
    formattedCardsArray = firstCard + cardsArrayExcludingFirst;
  }
  return formattedCardsArray;
};

var formatDealerCardsArray = function (cardsArray) {
  var formattedDealerCardsArray = "";
  var cardsArrayExcludingFirst = "";
  var firstCard = `a hidden card`;
  for (var index = 1; index < cardsArray.length; index += 1) {
    var currentCard = `${cardsArray[index].name} of ${cardsArray[index].suit}`;
    cardsArrayExcludingFirst += " and " + currentCard;
    formattedDealerCardsArray = firstCard + cardsArrayExcludingFirst;
  }
  return formattedDealerCardsArray;
};

var dealCard = function (cardsArray) {
  cardsArray.push(deck.pop());
  outputMessage = `You drew a card.<br>
  Your cards are ${formatCardsArray(cardsArray)}.<br>
  You currently have ${addPoints(cardsArray)} points.`;
  if (addPoints(cardsArray) === 21) {
    outputMessage +=
      "You've won! Congratulations! Refresh the page to start a new game.";
  }
  if (addPoints(cardsArray) !== 21) {
    outputMessage += `<br>Click "hit" to draw another card, or "stand" for the dealer's turn.`;
    gameMode = "choose";
  }
};

var addPoints = function (cardsArray) {
  for (var index = 0; index < cardsArray.length; index += 1) {
    if (
      //OR, create extra key that's called points.
      cardsArray[index].name === "Jack" ||
      cardsArray[index].name === "Queen" ||
      cardsArray[index].name === "King"
    ) {
      cardsArray[index].rank = 10;
    }
    if (cardsArray[index].name === "Ace") {
      cardsArray[index].rank = 11;
    }
  }
  var points = 0;
  for (index = 0; index < cardsArray.length; index += 1) {
    points += Number(cardsArray[index].rank);
    if (points > 21) {
      for (index = 0; index < cardsArray.length; index += 1) {
        if (cardsArray[index].name === "Ace") {
          cardsArray[index].rank = 1;
        }
      }
      points = 0;
      for (index = 0; index < cardsArray.length; index += 1) {
        points += Number(cardsArray[index].rank);
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
    outputMessage = `You have ${playerPoints} points. The dealer has ${dealerPoints} points. You win! <br><br>Refresh the page to start a new game.`;
  }
  if (playerPoints < dealerPoints && dealerPoints < 22) {
    outputMessage = `You have ${playerPoints} points. The dealer has ${dealerPoints} points. You lose! <br><br>Refresh the page to start a new game.`;
  }
  if (playerPoints === dealerPoints) {
    outputMessage = `You have ${playerPoints} points. The dealer has ${dealerPoints} points. It's a tie! <br><br>Refresh the page to start a new game.`;
  }
  if (playerPoints > 21) {
    outputMessage = `The dealer has ${dealerPoints} points. You have ${playerPoints} points. You're busted and the dealer wins! You lose! <br><br>Refresh the page to start a new game.`;
  }
  if (dealerPoints > 21 && playerPoints < 22) {
    outputMessage = `The dealer has ${dealerPoints} points. The dealer's busted! You have ${playerPoints} points. You win! <br><br>Refresh the page to start a new game.`;
  }
};

playerCardsArray.push(getRandomCard(), getRandomCard());
dealerCardsArray.push(getRandomCard(), getRandomCard());

var main = function (input) {
  if (gameMode == "start") {
    outputMessage = `Your cards are ${formatCardsArray(playerCardsArray)}.<br>
  You currently have ${addPoints(playerCardsArray)} points.<br><br>
  The Dealer's cards are ${formatDealerCardsArray(dealerCardsArray)}.<br><br>`;
    //be careful not to add extra brackets to close the condition!
    if (addPoints(playerCardsArray) === 21) {
      outputMessage +=
        "You've won! Congratulations! Refresh the page to start a new game.";
      return outputMessage;
    }
    if (addPoints(playerCardsArray) < 21) {
      outputMessage += `Click "hit" to draw another card, or "stand" for the dealer's turn.`;
      gameMode = "choose";
      document.querySelector("#hit-button").disabled = false;
      document.querySelector("#stand-button").disabled = false;
      document.querySelector("#submit-button").disabled = true;
      return outputMessage;
    }
  }
  if (gameMode == "choose") {
    if (input == "hit") {
      dealCard(playerCardsArray);
      return outputMessage;
    }
    playerPoints = addPoints(playerCardsArray);
    if (input === "stand") {
      document.querySelector("#submit-button").disabled = false;
      while (addPoints(dealerCardsArray) < 17) {
        dealCard(dealerCardsArray);
        outputMessage = `Dealer drew a card.`;
      }
      dealerPoints = addPoints(dealerCardsArray);
      gameMode = "compare";
    }
  }
  if (gameMode == "compare") {
    comparePoints(playerPoints, dealerPoints);
    gameMode = "start";
    return outputMessage;
  }
};
