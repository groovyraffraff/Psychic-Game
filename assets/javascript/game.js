var alphabet =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersguessed = [];
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);

var userChoice =[];

document.onkeyup = function(event) {
    var userChoice = event.key;

if(userChoice === computerChoice) {
    wins++;
    guessesLeft = 9;
    lettersguessed = [];
    alert("You Got it! Nice. How about another round?");
     computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
     console.log(computerChoice);

}else {
    guessesLeft--;
    lettersguessed.push(userChoice);
}

if(guessesLeft === 0) {
    losses++;
    guessesLeft = 9;
    lettersguessed = [];
     alert("Better luck next time!");

     computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
     console.log(computerChoice)};


document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("guesses_left").innerHTML = "Guesses Left: " + guessesLeft;
document.getElementById("guesses_so_far").innerHTML = "Guesses So Far: " + lettersguessed;
}
