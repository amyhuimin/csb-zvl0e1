var getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

//One (adjective) morning, a (adjective) taitai went to Sheng Siong to buy a (adjective) diamond ring.
//

var adjectives = [];
var nouns = [];

var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.

  if (input != "create") {
    adjectives.push(input);
    return "Enter more adjectives or 'create' to view output";
  } else {
    var getRandomAdj = function () {
      return adjectives[getRandomIndex(adjectives.length)];
    };
    var myOutputValue = `One ${getRandomAdj()} morning, a ${getRandomAdj()} taitai went to Sheng Siong to buy a ${getRandomAdj()} diamond ring.`;
  }
  return myOutputValue;
};

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
  var currentMode = "input";
  if (input != "create") {
    adjectives.push(input);
    var myOutputValue = "Enter more adjectives or 'create' to view output";
  }
  if (input == "create") {
    //change mode
    currentMode = "create";
    var getRandomAdj = function () {
      return adjectives[getRandomIndex(adjectives.length)];
    };
    myOutputValue = `One ${getRandomAdj()} morning, a ${getRandomAdj()} taitai went to Sheng Siong to buy a ${getRandomAdj()} diamond ring.`;
  }

  return myOutputValue;
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  if (input != "create") {
    var separatedInput = input.split(" ");
    for (var i = 0; i < separatedInput.length; i += 1) {
      adjectives.push(separatedInput[i]);
    }
    console.log(adjectives);
    // adjectives.push(input.split(" "));
    return "Enter more adjectives or 'create' to view output";
  } else {
    var getRandomAdj = function () {
      return adjectives[getRandomIndex(adjectives.length)];
    };
    var myOutputValue = `One ${getRandomAdj()} morning, a ${getRandomAdj()} taitai went to Sheng Siong to buy a ${getRandomAdj()} diamond ring.`;
  }
  return myOutputValue;
};

var inputMode = "adjective";
var currentMode = "input";

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  //Default is input mode
  //When user types in "adjective", whatever they type would be added to adjective array.
  //When user type in "nouns", whatever they type would be added to noun array.
  //currentMode to toggle between input / create

  // check input mode / adjective / noun
  //
  //   currentMode = "input";
  if (input != "create") {
  
      if (inputMode == "noun") {
        if (input != "noun" && input != "adjective")
        nouns.push(input);
        myOutputValue = "Enter more nouns or 'create' to view output";
      }
      if (inputMode == "adjective") {
      
        adjectives.push(input);
        myOutputValue = "Enter more adjectives or 'create' to view output";
      }
    }
    if (input == "noun") {
      inputMode = "noun";
      myOutputValue = "Start typing your noun!";
    }
    if (input == "adjective") {
      inputMode = "adjective";
      var myOutputValue = "Start typing your adjective!";
    }
  }

  if (input == "create") {
    //change mode
    currentMode = "create";
    var getRandomAdj = function () {
      return adjectives[getRandomIndex(adjectives.length)];
    };
    var getRandomNoun = function () {
      return nouns[getRandomIndex(nouns.length)];
    };
    myOutputValue = `One ${getRandomAdj()} morning, a ${getRandomAdj()} ${getRandomNoun()} went to ${getRandomNoun()} to buy a ${getRandomAdj()} ${getRandomNoun()}.`;
  }

  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
