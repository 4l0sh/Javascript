let remainingTurns = 3;

var heldDice = [false, false, false, false, false];

function rollDice() {
  var die1 = document.getElementById("dice1");
  var die2 = document.getElementById("dice2");
  var die3 = document.getElementById("dice3");
  var die4 = document.getElementById("dice4");
  var die5 = document.getElementById("dice5");
  var total = document.getElementById("total");
  var yat = document.getElementById("yahtzee");

  if (!heldDice[0]) die1.innerHTML = Math.floor(Math.random() * 6) + 1;
  if (!heldDice[1]) die2.innerHTML = Math.floor(Math.random() * 6) + 1;
  if (!heldDice[2]) die3.innerHTML = Math.floor(Math.random() * 6) + 1;
  if (!heldDice[3]) die4.innerHTML = Math.floor(Math.random() * 6) + 1;
  if (!heldDice[4]) die5.innerHTML = Math.floor(Math.random() * 6) + 1;

  var totaal =
    parseInt(die1.innerHTML) +
    parseInt(die2.innerHTML) +
    parseInt(die3.innerHTML) +
    parseInt(die4.innerHTML) +
    parseInt(die5.innerHTML);
  total.innerHTML = totaal;

  if (
    die1.innerHTML == die2.innerHTML &&
    die1.innerHTML == die3.innerHTML &&
    die1.innerHTML == die4.innerHTML &&
    die1.innerHTML == die5.innerHTML
  ) {
    yat.innerHTML = "Yahtzee!";
  } else {
    yat.innerHTML = "No Yahtzee";
  }

  if (remainingTurns <= 0) {
    alert("No  more turns left!");
    remainingTurns == 3;
    return;
  }

  remainingTurns--;
  document.getElementById("remainingTurns").textContent =
    "You have " + remainingTurns + " rolls";


    dicesValue.length = 0;
    dicesValue.push(die1.innerHTML, die2.innerHTML, die3.innerHTML, die4.innerHTML, die5.innerHTML);

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
let img = document.getElementById("img");
img.src = "dice " + die1.innerHTML + ".png";
document.body.appendChild(img);
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



  
  







const dicesValue = [];

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


