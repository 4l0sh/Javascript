
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

    var totaal = parseInt(die1.innerHTML) + parseInt(die2.innerHTML) + parseInt(die3.innerHTML) + parseInt(die4.innerHTML) + parseInt(die5.innerHTML);
    total.innerHTML = totaal;

    if (die1.innerHTML == die2.innerHTML && die1.innerHTML == die3.innerHTML && die1.innerHTML == die4.innerHTML && die1.innerHTML == die5.innerHTML) {
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
    document.getElementById("remainingTurns").textContent = "You have " + remainingTurns + " rolls";
}

function holdDie(dieNum, ali) {
    heldDice[dieNum - 1] = !heldDice[dieNum - 1];


    
    //waarde van de dubblestenen laten zien 
    die1.innerHTML = diceOne;
    die2.innerHTML = diceTwo;
    die3.innerHTML = diceThree;
    die4.innerHTML = diceFour;
    die5.innerHTML = diceFive;

}









