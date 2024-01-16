let wordToGuess = prompt("Schrijf je woord");


const letters = wordToGuess.split('');
console.log(letters);
let letterGuessed = letters;
let letterToGuess = prompt("Raad de letter");
if (letters.includes(letterToGuess)) {
    console.log("Good job, proud of you");
    prompt("Guess the next letter");
    for(let letter = 0; letter > letters.includes(letterToGuess).length; letter++){
        console.log(letter);
    }

}else{
    console.log("try again (LOSER)");
    prompt("Guess another letter");
   
} 