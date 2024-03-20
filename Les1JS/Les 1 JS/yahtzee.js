let remainingTurns = 3;
let heldDice = [false, false, false, false, false];
let diceValues = [0, 0, 0, 0, 0];
let onesCountPlayer1=0;
let onesCountPlayer2=0;
let twosCountPlayer1=0;
let twosCountPlayer2=0;
let threesCountPlayer1=0;
let threesCountPlayer2=0;
let foursCountPlayer1=0;
let foursCountPlayer2=0;
let fivesCountPlayer1=0;
let fivesCountPlayer2=0;
let sixesCountPlayer1=0;
let sixesCountPlayer2=0;

let threeOfaKindTotP1=0;
let fourOfaKindTotP1=0;
let yatP1 =0;
let fullHouseP1 = 0;
let smallStraightP1=0;
let largeStraightP1=0;

var threeOfAKindTotalPlayer2 = 0;
var fourOfAKindTotalPlayer2 = 0;
var fullHouseTotalPlayer2 = 0;
var largeStraightTotalPlayer2 = 0
var smallStraightTotalPlayer2 = 0
var yahtzeeScorePlayer2 = 0;

function rollDice() {
  if (remainingTurns === 0) {
    alert("No more turns left!");
    return;
  }

  for (let i = 0; i < heldDice.length; i++) {
    if (!heldDice[i]) {
      // Roll only if the dice is not held
      diceValues[i] = Math.floor(Math.random() * 6) + 1;
    }
  }

  // Update die images
  for (let i = 0; i < diceValues.length; i++) {
    document.getElementById("dice" + (i + 1)).src = "dice " + diceValues[i] + ".png";
  }

  remainingTurns--;
  document.getElementById("remainingTurns").textContent = "You have " + remainingTurns + " rolls";

  
  updateScore(); 
}

function holdDie(dieNum) {
  heldDice[dieNum - 1] = !heldDice[dieNum - 1];
}

// Example of updating score based on dice values
function updateScore() {
  let totalScore = 0;
  for (let i = 0; i < diceValues.length; i++) {
    totalScore += diceValues[i];
  }z
  document.getElementById("total").textContent =  totalScore;
}

// Example of calling selectOnes function
function selectOnesPlayer1() {
 onesCountPlayer1 = diceValues.filter(value => value === 1).length;
  console.log("Number of ones: " + onesCountPlayer1);
  document.getElementById("onesPlayer1").textContent = onesCountPlayer1 * 1; 
  // You can update the HTML elements to display the count of ones as needed
}
function selectOnesPlayer2() {
 onesCountPlayer2 = diceValues.filter(value => value === 1).length;
  document.getElementById("onesPlayer2").textContent = onesCountPlayer2 * 1; 
  console.log("Number of ones: " + onesCountPlayer2);
}
function selectTwosPlayer1() {
 twosCountPlayer1 = diceValues.filter(value => value === 2).length;
  document.getElementById("twosPlayer1").textContent = twosCountPlayer1 * 2; 
  console.log("Number of Twos: " + twosCountPlayer1);
}
function selectTwosPlayer2() {
 twosCountPlayer2 = diceValues.filter(value => value === 2).length;
  document.getElementById("twosPlayer2").textContent = twosCountPlayer2 * 2; 
  console.log("Number of Twos: " + twosCountPlayer2);
}
function selectThreesPlayer1() {
 threesCountPlayer1 = diceValues.filter(value => value === 3).length;
  document.getElementById("threesPlayer1").textContent = threesCountPlayer1 * 3; 
  console.log("Number of threes: " + threesCountPlayer1);
}
function selectThreesPlayer2() {
 threesCountPlayer2 = diceValues.filter(value => value === 3).length;
  document.getElementById("threesPlayer2").textContent = threesCountPlayer2 *3; 
  console.log("Number of threes: " + threesCountPlayer2);
}
function selectFoursPlayer1() {
 foursCountPlayer1 = diceValues.filter(value => value === 4).length;
  document.getElementById("foursPlayer1").textContent = foursCountPlayer1 *4; 
  console.log("Number of fours: " + foursCountPlayer1);
}
function selectFoursPlayer2() {
 foursCountPlayer2 = diceValues.filter(value => value === 4).length;
  document.getElementById("foursPlayer2").textContent = foursCountPlayer2 *4; 
  console.log("Number of fours: " + foursCountPlayer2);
}
function selectFivesPlayer1() {
 fivesCountPlayer1 = diceValues.filter(value => value === 5).length;
  document.getElementById("fivesPlayer1").textContent = fivesCountPlayer1 *5;
  console.log("Number of fives: " + fivesCountPlayer1);
}
function selectFivesPlayer2() {
 fivesCountPlayer2 = diceValues.filter(value => value === 5).length;
  document.getElementById("fivesPlayer2").textContent = fivesCountPlayer2 *5;
  console.log("Number of fives: " + fivesCountPlayer2);
}
function selectSixsPlayer1() {
 sixesCountPlayer1 = diceValues.filter(value => value === 6).length;
  document.getElementById("sixsPlayer1").textContent = sixesCountPlayer1 *6;
  console.log("Number of sixes: " + sixesCountPlayer1);
}
function selectSixsPlayer2() {
  sixesCountPlayer2 = diceValues.filter(value => value === 6).length;
  document.getElementById("sixsPlayer2").textContent = sixesCountPlayer2 *6;
  console.log("Number of sixes: " + sixesCountPlayer2);
}

function changePlayer(){
  remainingTurns = 3;
  document.getElementById("remainingTurns").textContent = "You have  " + 3 + " rolls" ;
  for (let i = 0; i < diceValues.length; i++){
  document.getElementById("dice" + (i + 1)).src = "dice 1.png";
  }
  heldDice = [false, false, false, false, false];
}

function threeOfAKind() {

  const counts = Array.from({ length: 6 }, () => 0); // Array to count occurrences of each number
  for (const value of diceValues) {
    counts[value - 1]++; // Increment count for the corresponding number
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] == 3) {
      document.getElementById("threeOfaKind").textContent = threeOfaKindTotP1;
      threeOfaKindTotP1 = diceValues[0] + diceValues[1] + diceValues[2] + diceValues[3] +diceValues[4] ;
      return true; // Found three of a kind
    }
  }
  document.getElementById("threeOfaKind").textContent = "No Three of a Kind";
  return false; // No three of a kind found
}

function threeOfAKindPlayer2() {
  const counts = Array.from({ length: 6 }, () => 0);
  for (const value of diceValues) {
    counts[value - 1]++;
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] == 3) {
      threeOfAKindTotalPlayer2 = diceValues[0] + diceValues[1] + diceValues[2] + diceValues[3] + diceValues[4];
      document.getElementById("threeOfaKindPlayer2").textContent = threeOfAKindTotalPlayer2;
      return true;
    }
  }
  document.getElementById("threeOfaKindPlayer2").textContent = "No Three of a Kind!";
  return false;
}

function fourOfAKind() {

  const counts = Array.from({ length: 6 }, () => 0); // Array to count occurrences of each number
  for (const value of diceValues) {
    counts[value - 1]++; // Increment count for the corresponding number
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] == 4) {
      document.getElementById("fourOfaKind").textContent = fourOfaKindTotP1;
      fourOfaKindTotP1= diceValues[0] + diceValues[1] + diceValues[2] + diceValues[3] +diceValues[4] ;
      return true; // Found four of a kind
    }
  }
  // alert("No Four of A Kind")
  document.getElementById("fourOfaKind").textContent = "No Four of a Kind";
  return false; // No four of a kind found
}
function fourOfAKindPlayer2() {
  const counts = Array.from({ length: 6 }, () => 0);
  for (const value of diceValues) {
    counts[value - 1]++;
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] == 4) {
      fourOfAKindTotalPlayer2 = diceValues[0] + diceValues[1] + diceValues[2] + diceValues[3] + diceValues[4];
      document.getElementById("fourOfaKindPlayer2").textContent = fourOfAKindTotalPlayer2;
      return true;
    }
  }
  document.getElementById("fourOfaKindPlayer2").textContent = " No Four of a Kind!";
  // document.getElementById("fourOfaKind").textContent = "No Four of a Kind";
  return false; // No four of a kind found
}



function fullHouse() {
  const counts = Array.from({ length: 6 }, () => 0); // Array to count occurrences of each number
  for (const value of diceValues) {
    counts[value - 1]++; // Increment count for the corresponding number
  }
  let hasThree = false;
  let hasTwo = false;
  for (let i = 0; i < 6; i++) {
    if (counts[i] === 3) {
      hasThree = true;
    } else if (counts[i] === 2) {
      hasTwo = true;
    }
  }
  if (hasThree && hasTwo) {
    document.getElementById("fullHouse").textContent = fullHouseP1;
    fullHouseP1 = 25;
    return true; // Found a full house
  } else {
    document.getElementById("fullHouse").textContent = "No Full House";
    return false; // No full house found
  }
}

function fullHousePlayer2() {
  const counts = Array.from({ length: 6 }, () => 0); // Array to count occurrences of each number
  for (const value of diceValues) {
    counts[value - 1]++; // Increment count for the corresponding number
  }
  let hasThree = false;
  let hasTwo = false;
  for (let i = 0; i < 6; i++) {
    if (counts[i] === 3) {
      hasThree = true;
    } else if (counts[i] === 2) {
      hasTwo = true;
    }
  }
  if (hasThree && hasTwo) {
    document.getElementById("fullHousePlayer2").textContent = "Full House!";
    return true; // Found a full house
  } else {
    document.getElementById("fullHousePlayer2").textContent = "No Full House";
    return false; // No full house found
  }
}


function largeStraight() {
  const sortedDiceValues = diceValues.slice().sort((a, b) => a - b);
  for (let i = 0; i < sortedDiceValues.length - 1; i++) {
    if (sortedDiceValues[i] + 1 !== sortedDiceValues[i + 1]) {
      document.getElementById("largeStraight").textContent = "No Large Straight";
      return false; // Not a large straight
    }
  }
  document.getElementById("largeStraight").textContent = largeStraightP1;
  largeStraightP1 = 40;
  return true; // Found a large straight
}

function largeStraightPlayer2() {
  const sortedDiceValues = diceValues.slice().sort((a, b) => a - b);
  for (let i = 0; i < sortedDiceValues.length - 1; i++) {
    if (sortedDiceValues[i] + 1 !== sortedDiceValues[i + 1]) {
      largeStraightTotalPlayer2 = 40;
      document.getElementById("largeStraightPlayer2").textContent = largeStraightTotalPlayer2;
      return false; 
    }
  }
  document.getElementById("largeStraightPlayer2").textContent = "Large Straight!";
  return true; 
}

function smallStraight() {
  const sortedDiceValues = diceValues.slice().sort((a, b) => a - b);
  for (let i = 0; i < sortedDiceValues.length - 2; i++) {
    if (sortedDiceValues[i] + 1 === sortedDiceValues[i + 1] &&
        sortedDiceValues[i + 1] + 1 === sortedDiceValues[i + 2]) {
          smallStraightP1 = 30;
      document.getElementById("smallStraight").textContent = smallStraightP1;
      return true; // Found a small straight
    }
  }
  document.getElementById("smallStraight").textContent = "No Small Straight";
  return false; // Not a small straight
}
function smallStraightPlayer2() {
  const sortedDiceValues = diceValues.slice().sort((a, b) => a - b);
  for (let i = 0; i < sortedDiceValues.length - 2; i++) {
    if (sortedDiceValues[i] + 1 === sortedDiceValues[i + 1] &&
        sortedDiceValues[i + 1] + 1 === sortedDiceValues[i + 2]) {
          smallStraightTotalPlayer2 = 30;
          document.getElementById("smallStraightPlayer2").textContent = smallStraightTotalPlayer2;
      return true; 
    }
  }
  document.getElementById("smallStraightPlayer2").textContent = "No Small Straight";
  return false; 
}

function yahtzee() {
  
  const counts = Array.from({ length: 6 }, () => 0); // Array to count occurrences of each number
  for (const value of diceValues) {
    counts[value - 1]++; // Increment count for the corresponding number
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] === 5) {
      document.getElementById("yat").textContent = yatP1;
      yatP1= 50;
      return true; 
    }
  }
  document.getElementById("yat").textContent = "No Yahtzee";
  return false; 
}

function yahtzeePlayer2() {
  const counts = Array.from({ length: 6 }, () => 0); 
  for (const value of diceValues) {
    counts[value - 1]++; 
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] === 5) {
      yahtzeeScorePlayer2 = 50;
      document.getElementById("yatP2").textContent = yahtzeeScorePlayer2;
      return true; 
    }
  }
  document.getElementById("yatP2").textContent = "No Yahtzee";
  return false; 
}
function totalP2(){
  totalScorePlayer2 = (onesCountPlayer2 * 1) + (twosCountPlayer2 * 2) + (threesCountPlayer2 * 3) + (foursCountPlayer2 * 4) + (fivesCountPlayer2 * 5) + (sixesCountPlayer2 * 6 + threeOfAKindTotalPlayer2 + fourOfAKindTotalPlayer2 + yahtzeeScorePlayer2 + fullHouseTotalPlayer2 + smallStraightTotalPlayer2 + largeStraightTotalPlayer2);
  document.getElementById("totalP2").textContent = totalScorePlayer2;
}

// function calculateTotalScore(player) {
//   let totalScore = 0;
//   const playerTable = document.querySelector(`.player-${player} table`);

//   // Iterate over each row (game) in the player's table
//   for (let i = 1; i < playerTable.rows.length; i++) {
//     const gameScoreButton = playerTable.rows[i].cells[1].querySelector("button"); // Get the button element

//     if (gameScoreButton.textContent.trim() !== "") {
//       totalScore += parseInt(gameScoreButton.textContent); // Add the score to the total if it's not empty
//     }
//   }

//   return totalScore;
// }


function playHoverSound() {
  var audioElement = document.getElementById("animationSound");
  audioElement.play();
}

const title = document.getElementById("title");
const animationSound = document.getElementById("animationSound");

title.addEventListener("animationstart", () => {
    // Play sound when animation starts
    animationSound.play();
});

title.addEventListener("animationiteration", () => {
    // Play sound when animation loops
    animationSound.play();
});

title.addEventListener("animationend", () => {
    // Play sound when animation ends
    animationSound.play();
});

function totalScore() {
  totalPlayer1 = (onesCountPlayer1 * 1) + (twosCountPlayer1 * 2) + (threesCountPlayer1 * 3) + (foursCountPlayer1 * 4) + (fivesCountPlayer1 * 5) + (sixesCountPlayer1 * 6) + threeOfaKindTotP1+ fourOfaKindTotP1 +yatP1 + fullHouseP1 + smallStraightP1;

  document.getElementById("totalScore").textContent =totalPlayer1;

}
