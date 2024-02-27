const rollButton = document.getElementById("roll");
const holdButton = document.getElementById("hold");


const diceThrow = [1,2,3,4,5];
let canThrow = [true,true,true,true,true];

const dices = [0,0,0,0,0]

function diceRoll(dice){
    if(dice < 0 || dice > 4){
        return;
    }
    if(canThrow[dice]){
        diceThrow[dice] = Math.floor(Math.random() * 6) + 1;
    }
}

class Dice{
    constructor(){
        this.diceThrow = 1;
        this.canThrow = true;
    }

    roll(){
        if(this.canThrow){
            this.diceThrow = Math.floor(Math.random() * 6) + 1;
        }
    }
}

for(let i = 0; i < dices.length; i++){
    dices[i] = new Dice();
}
 
dices.forEach(dice => {
    dice.roll();
});


function diceHold(dice){
    dices[dice].canThrow = false;
  



}

function test(){
    document.getElementById("roll").innerHTML = "Test passed!";
    console.log(dices[1]);
}








function rollDice(){

    var die1 =document.getElementById("dice1");
    var die2 =document.getElementById("dice2");
    var die3 =document.getElementById("dice3");
    var die4 =document.getElementById("dice4");
    var die5 =document.getElementById("dice5");


    /* totale punten laten zien */
    var total = document.getElementById("total");
    var yat = document.getElementById("yahtzee"); //voor wanneer je yahtzee krijgt

    var diceOne = Math.floor(Math.random() * 6) +  1; 
    var diceTwo = Math.floor(Math.random() * 6) +  1; 
    var diceThree = Math.floor(Math.random() * 6) +  1; 
    var diceFour = Math.floor(Math.random() * 6) +  1; 
    var diceFive = Math.floor(Math.random() * 6) +  1; 


    var totaal = diceOne + diceTwo+diceThree+diceFour+diceFive ;
    total = totaal;
    innerHTML=total;

    if(diceOne == diceTwo && diceOne ==diceThree && diceOne == diceFour && diceOne == diceFive){
        yat.innerHTML = "Yahtzee!"
    }else{
        yat.innerHTML ="No Yahtzee"
    }




    
    

    
    

    //waarde van de dubblestenen laten zien 
    die1.innerHTML = diceOne;
    die2.innerHTML = diceTwo;
    die3.innerHTML = diceThree;
    die4.innerHTML = diceFour;
    die5.innerHTML = diceFive;
}




