//de gebruiker mag proberen om het 'te raden' getal te raden.
//Het te raden getal mag gewoon een vast getal zijn dat in de code staat (hardcoded)

//Een regel code is gegeven, hoe nu verder?
let isNumberGuessed = false;

let theNumber = Math.floor(Math.random() * 10)
let numberGuessed = prompt("Raad het getal (1 tot en met 10)");
while(isNumberGuessed == flase){
console.log(numberGuessed);
if(theNumber == numberGuessed){
    console.log("Gewonnen");
}else{
    console.log("fout");

}
if(numberGuessed > theNumber){
    console.log("Lager")
}else {
    console.log("hoger")
}
}