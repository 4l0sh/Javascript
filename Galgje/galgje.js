let woord = prompt("schrijf je woord");

const letters = woord.split("");
console.log(letters);
let running = true;
let wrongs = 0;
let letterGeraden = letters;

let letterRaden = prompt("raad de letter");
while(running){
    if(letters.includes(letterRaden)){
        console.log("Good Job, Proud of you ");
        for(let i = 0; i > letters.includes(letterRaden).length; i++){
            
            
        }
        letterRaden = prompt("raad de volgende letter");

        if(letters == woord){ 
            console.log('je hebt gewonnen');
            running = false;
        }
    //console.log("letter");
    }else{
        wrongs++;
        if(wrongs == 5){
            console.log('je hebt verloren');
            running = false;
        } else {
            console.log("Try again (loser)");
            letterRaden = prompt("raad een andere letter"); 
        }
     
    }
}