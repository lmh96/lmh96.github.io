var answers = ["terminals are cool", "this is an answer", "this is hangman"]
var answer = answers[Math.floor(Math.random() * answers.length)];


var guesses = [];
guesses.length = 26;
var tryNum = 0;

var theWord = document.getElementById("theWord");
var guessedLetters = document.getElementById("guessedLetters");
var currentGuess = document.getElementById("currentGuess");

for (var i = 0; i < answer.length; i++) {
    if(answer[i] !== ' ')
        theWord.textContent += "_";
    else
        theWord.textContent += " ";
}

document.onkeyup = function(event){
    if(tryNum < 5)
    {
        if(event.key.length === 1) {
            currentGuess.textContent = event.key.toUpperCase();

            var answerHas = false;
        //check if guess is right or wrong and do something if its right
            for(var i = 0; i < answer.length; i++) {
                if(event.key.toLowerCase() === answer[i].toLowerCase()) {
                    var word = theWord.textContent.toLowerCase();
                    word = word.trim();
                    word = word.substr(0,i) + event.key + word.substr(i + 1);
                    console.log(word);
                    theWord.textContent = word.toUpperCase();
                    answerHas = true;
                }
            }
        
        //If the guess is wrong do this
            if(!answerHas) {
                guesses[tryNum] = event.key;
                console.log(tryNum);
                tryNum++;
                if(tryNum === 1)
                {
                    var element = $("#head");
                    element.css("opacity", 1.0);
                }
                if(tryNum ===2)
                {
                    var element = $("#body");
                    element.css("opacity", 1.0);
                }
                if(tryNum ===3)
                {
                    var element = $("#left-arm");
                    element.css("opacity", 1.0);
                }
                if(tryNum ===4)
                {
                    var element = $("#right-arm");
                    element.css("opacity", 1.0);
                }
                if(tryNum ===5)
                {
                    var element = $("#legs");
                    element.css("opacity", 1.0);
                }
                if(tryNum >= 5)
                {
                    currentGuess.textContent = "YOU LOSE.";
                }
            }
        
            if(guesses.includes(event.key) && !guessedLetters.textContent.includes(event.key))
            {
                guessedLetters.textContent += event.key.toUpperCase();
            }
        
            if(theWord.textContent.toLocaleLowerCase() === answer.toLowerCase()) {
                currentGuess.textContent = "YOU WIN!";
            }
        }
    }
}