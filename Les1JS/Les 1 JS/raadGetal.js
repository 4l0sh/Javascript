let running = true;
let wordToGuess = prompt("Schrijf je woord");
const letters = wordToGuess.split('');

while(running = true){





let letterGuessed = prompt("Raad de letter");
if(letterInWord(letterGuessed))
{
    console.log("goed");
    

} else 
    {
    console.log('fout');
  }




}




function letterInWord(letter){
    return wordToGuess.includes(letter);
}