/*
console.log("I'm in the browser");
console.error("Help me!");
console.warn("ask me for infor");

var hungry = false;
if (hungry){
    console.warn("I'm hungry,");
} else{
    console.info("but i'm thirsty");
}
*/

// find the buffet price according to input age.
// check for erroreous input
// come up with an appropriate output

/*
// exercise 2
var buffetPrice = function(age){
    if (typeof age !== 'number'){
        console.error("Input must be a number!");
    } else if (age <=0) {
        return -1;
    } else if (age < 10){
        return 20;
    } else if (age >=10 && age < 21){
        return 30;
    }
    return 40;
}

console.log("if age is -2, buffet price = $" + buffetPrice(-2));
console.log("if age is string 10, buffet price = $" + buffetPrice("ten"));

console.log("if age is 9, buffet price = $" + buffetPrice(9));
console.log("if age is 15, buffet price = $" + buffetPrice(15));
console.log("if age is 33, buffet price = $" + buffetPrice(33));

*/

/*
var mul = function(m, n){
    return(m * n);
}

for (var i=2; i<13; i++){  //outer
    console.info("\nMultiplication table for %d ", i);

    for (var j=1; j<13; j++){ // inner

        console.log("%d * %d = %d", i, j, mul(i,j)); // string interpolation
        // console.log(i + " * " + j + " = " + mul(i,j)); //string concatenation
        // no. of loops = outer * inner 
        // refer to O-notation
    }
}

var k=0;
while (k<10){
    console.log("k = %d ", k);
    k++;
}
*/

//Ex3. try to guess a number secret. If input is > secret, say lower. If input is < secret, say higher.
//if input == secret, say correct.

/*
var secret = 7;
var num = 0;
var tries = 0;

while ( (num!= secret) && (tries < 5)) {

    num = parseInt(prompt("Guess a number between 1 and 10"));
    if (num < secret){
        console.log("Guess %d, your input %d should be higher", tries, num);
    }
    else if (num > secret){
        console.log("Guess %d, your input %d should be lower", tries, num);
    }
    else{
        console.log("Your guess %d is correct!", num);
    }
    tries++;
}
*/

// teacher's soln :
/*
var TIMES = 5;
var toGuess = 7;
var myGuess = -1;
var counter = 1;

var evaluate = function(myNum, toGuess){
    if (myNum < toGuess)
        return ("higher");
    else if (myNum == toGuess)
        return ("correct!");
    return ("lower");
}

while (counter <= TIMES){
    myGuess = parseInt(prompt("Number between 1 - 10"));
    result = evaluate(myGuess, toGuess);

    console.log("Times : %d my guess ; %d, result : %s", counter, myGuess, result);
    if (result =="correct!")
        break; //exit from the loop
    counter++;
}
if (myGuess != toGuess )
    console.log("you lose!");
*/

// Data stuctures :
// array - a collection; indexes start from 0
var basket = ["milk", "eggs", "bread", 23, false];
var len = basket.length;
console.log("size of basket is %d", len );

for (var i=0; i<len; i++){
    console.log("basket[%d] = %s", i, basket[i]);
}

// queue behaviour -- FIFO; take out from front, add to the back
basket.push("ice cream"); //add to back
basket.shift(); //take out from front
basket.push("pizza");
len = basket.length;

var j=0;
while(j<len){
    console.log("basket[%d] = %s", j, basket[j]);
    j++;
}

//stack -- last in first out : basket.push(""); basket.pop();
// FYI : to add things to the front use basket.unshift("apple")
// shift and unshift works on the front of the array
// push and pop work on the back of the array