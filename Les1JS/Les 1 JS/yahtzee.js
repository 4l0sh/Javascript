let remainingTurns = 3;

var heldDice = [false, false, false, false, false];
const dicesValue = [die1,die2,die3,die4,die5];
function rollDice() {
  // var die1 = document.getElementById("dice1");
  // var die2 = document.getElementById("dice2");
  // var die3 = document.getElementById("dice3");
  // var die4 = document.getElementById("dice4");
  // var die5 = document.getElementById("dice5");


  // if (!heldDice[0])  die1.src = `dice ${Math.floor(Math.random() * 6) + 1}.png`;
  // if (!heldDice[1])  die2.src = `dice ${Math.floor(Math.random() * 6) + 1}.png`;
  // if (!heldDice[2])  die3.src = `dice ${Math.floor(Math.random() * 6) + 1}.png`;
  // if (!heldDice[3])  die4.src = `dice ${Math.floor(Math.random() * 6) + 1}.png`;
  // if (!heldDice[4])  die5.src = `dice ${Math.floor(Math.random() * 6) + 1}.png`;
  if (!heldDice [0])var die1 = Math.floor(Math.random() * 6) +1;
  if(!heldDice [1])var die2 = Math.floor(Math.random() * 6) +1;
  if(!heldDice [2])var die3 = Math.floor(Math.random() * 6) +1;
  if(!heldDice [3])var die4 = Math.floor(Math.random() * 6) +1;
  if(!heldDice[4])var die5 = Math.floor(Math.random() * 6) +1;


  document.getElementById("dice1").src = `dice ${die1}.png`;
  document.getElementById("dice2").src = `dice ${die2}.png`;
  document.getElementById("dice3").src = `dice ${die3}.png`;
  document.getElementById("dice4").src = `dice ${die4}.png`;
  var i = document.getElementById("dice5").src = `dice ${die5}.png`;
  
  

    var total = document.getElementById("total");
  var yat = document.getElementById("yahtzee");
  var totaal =
    parseInt(die1)+
    parseInt(die2)+
    parseInt(die3)+
    parseInt(die4)+
    parseInt(die5);
      total = totaal;


  if (
    die1== die2 &&
    die1== die3 &&
    die1== die4 &&
    die1== die5
  ) {
    yat = "Yahtzee!";
  } else {
    yat = "No Yahtzee";
  }

  if (remainingTurns <= 0) {
    alert("No  more turns left!");
    remainingTurns == 3;
    return;
  }

  remainingTurns--;
  document.getElementById("remainingTurns").textContent =
    "You have " + remainingTurns + " rolls";


    // dicesValue.length = 0;
    // dicesValue.push(die1.src, die2.src, die3.src, die4.src, die5.src);

   /*if (remainingTurns == 2) {
    dicesValue.push(die1.innerHTML, die2.innerHTML, die3.innerHTML, die4.innerHTML, die5.innerHTML);
    console.log("pushed");
  }
  if (remainingTurns == 1) {
    dicesValue.splice(0, dicesValue.length);
    console.log("spliced");
  }
  if (remainingTurns == 1) {
    dicesValue.push(die1.innerHTML, die2.innerHTML, die3.innerHTML, die4.innerHTML, die5.innerHTML);
    console.log("pushed");
  }*/


// alle enen in de array zettern 
const dicesValue = [die1,die2,die3,die4,die5];
const ones = dicesValue.filter(isOne);
console.log(ones);
var onesArray = ones.length;
console.log(onesArray);

// Get all elements with the class name 'onesID'
var onesID = document.querySelectorAll('.onesID');

// de enen knopen bijwerken
onesID.forEach(button => {
    button.innerHTML = onesArray;
});

                  
  
  
  const twos = dicesValue.filter(isTwo)
  console.log(twos);

  var twosArray = twos.length;
  console.log(twosArray);

  var twosID = document.querySelectorAll(".twosID");
  twosID.forEach(button => {
    button.innerHTML = twosArray;
  });
  



  const threes = dicesValue.filter(isThree)
  console.log(threes);
  var threesArray = threes.length;
  console.log(threesArray);

  var threesID = document.querySelectorAll(".threesID");
  threesID.forEach(button => {
    button.innerHTML = threesArray;
  });




  const fours = dicesValue.filter(isFour)
  console.log(fours);
  var foursArray = fours.length;
  console.log(threesArray);

  var foursID = document.querySelectorAll(".foursID");
  foursID.forEach(button => {
    button.innerHTML = foursArray;
  });



  const fives = dicesValue.filter(isFive)
  console.log(fours);
  var fivesArray = fives.length;
  console.log(fivesArray);

  var fivesID = document.querySelectorAll(".fivesID");
  fivesID.forEach(button => {
    button.innerHTML = fivesArray;
  });



  const sixs = dicesValue.filter(isSix)
  console.log(fours);
  var sixsArray = sixs.length;
  console.log(sixsArray);

  var sixsID = document.querySelectorAll(".sixsID");
  sixsID.forEach(button => {
    button.innerHTML = sixsArray;
  });



   die1.innerHTML = document.getElementById("diceFaces");
   
let img = document.getElementById("Dice1");
img.src = "dice " + dicesValue[0] + ".png";
//document.body.appendChild(img);
console.log("added image of " + die1.innerHTML);

  img.onclick = function() {
      console.log(diceFaces.value);
  }; 

  
}

function isOne(value){
      return value == 1;
      
  }

function isTwo(value){
  return value == 2;
      
}

function isThree(value){
  return value == 3;
      
}

function isFour(value){
  return value == 4;
      
}

function isFive(value){
  return value == 5;
      
}

function isSix(value){
  return value == 6;
      
}





// const dicesValue = [die1,die2,die3,die4,die5];

function holdDie(dieNum, ali) {
  heldDice[dieNum - 1] = !heldDice[dieNum - 1];

  //waarde van de dubblestenen laten zien
  die1.innerHTML = diceOne;
  die2.innerHTML = diceTwo;
  die3.innerHTML = diceThree;
  die4.innerHTML = diceFour;
  die5.innerHTML = diceFive;


}
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




function fourOfaKind() {
  // Get the values of the dice
  var diceValues = [dice1.value, dice2.value, dice3.value, dice4.value, dice5.value];
  
  // Filter the dice values to get the unique values and their counts
  var valueCounts = diceValues.filter((value, index, self) => {
    return self.indexOf(value) ===  index;
  }).map(value => {
    return {value: value, count: diceValues.filter(v => v === value).length};
  });

  // Check if there are four of a kind
  for (var i = 0; i < valueCounts.length; i++) {
    if (valueCounts[i].count === 4) {
      // Four of a kind found, add score to player's total
      addScore('fourOfAKind', 4 * parseInt(valueCounts[i].value));
      return;
    }
  }

  // If the function reaches here, it means there are no four of a kind
  alert('No four of a kind');
}

function addScore(category, score) {
  // Get the current score for the category
  var currentScore = parseInt(document.getElementsByClassName(category)[0].innerHTML);

  // Update the score
  document.getElementsByClassName(category)[0].innerHTML = currentScore + score;
}
