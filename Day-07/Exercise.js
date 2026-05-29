// given an array of number that is
let number = [1,2,3,4,5,6,7,80,39,90,81,12,14,16,35,86,17,18,19,20,21,25]
//1. log the even number
for(i=0; i< number.length; i++){
    if(number[i] % 2 ===0){
        console.log("The even number are :" , + number[i]);
    }
}
// log the odd number
for(i=0; i< number.length; i++){
    if(number[i] % 2 !==0){
        console.log("The odd number are:", + number[i]);
    }
}
//number divisible by 3
for(i=0; i< number.length; i++){
    if(number[i] % 3 ===0){
        console.log( " number divisible by 3 are",number[i]);
    }
}
//multiply all number by 2
// log the odd number
for(i=0; i< number.length; i++){
        console.log("The number  multiplied by 2 is  :" , + number[i] *2);
    }
// smalest number
let smallest = number[0];

for (let i = 0; i < number.length; i++) {
    if (number[i] < smallest) {
        smallest = number[i];
    }
}
console.log("The smallest number is",+ smallest);
// the largest
let largest=number[0];
for (let i = 0; i< number.length ;i++){ 
    if (number[i] > largest) {
        largest = number[i];
    } 
}
console.log("The largest number is", +largest);
// number guessing Game
const secretNumber= Math.floor(Math.random()*10)+1;
console.log("The secret number are :" ,+ secretNumber);
let userGuess = "Guess the number between 1 and 10:";
userGuess = Number(userGuess);

if (userGuess === secretNumber) {
    console.log("Correct! You guessed it.");
} else {
    console.log(`Wrong! The number was ${secretNumber}.`);
}
while(userGuess !== secretNumber){
    console.log("The continue guess a number between 1 and 10");
    break;
}

console.log("You guess the number")