var TIMES = 5;
var CORRECT = "Correct!";
var LOWER = "lower";
var HIGHER = "higher";

var toGuess = 7;
var counter = 1;
var myGuess = -1;
var result = "";

var evaluate = function(myNum, toGuess) {

    if (myNum < toGuess) 
        return (HIGHER);

    else if (myNum == toGuess)
        return (CORRECT);
    
    return (LOWER);
}

while (counter <= TIMES) {
    myGuess = parseInt(prompt("Number between 1 - 10"));

    result = evaluate(myGuess, toGuess);

    console.log("Times: %d my guess: %d, result: %s"
            , counter, myGuess, result);

    if (result == CORRECT)
        break; //exit from the loop
        //counter = TIMES;

    counter++;
}

if (myGuess != toGuess)
    console.log("You LOOSE!");