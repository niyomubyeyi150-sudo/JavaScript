// The loops are the repetition of the same code multiple times
// In loop we have types are
   // 1.for loop
   // 2. while loop
   // 3. do while loop

// 1. The for loop is made out of the three main parts
// a. in a for loop we have the condition
//B.  in a for loop we have initialization
// d. in a for loop we have afterthought

// we are gaion to count from one to 10
for(let p=1; p<= 10 ;p++){
    console.log(p);
}
// count down
for (let p=10;p>=1;p--){
    console.log(p);
}
// Displaying even numbers
for(i=1; i<=20;i++){
    if(i % 2 ===0){
        console.log(i);
    }
}

// WHILE LOOP AND HOW ITS WORK
let roll =0;
while(roll !== 6){
    roll =Math.floor(Math.random()*6) +1;
   console.log ("You rolled a", + roll);                               
}
console.log("congrants you rolled a 6");

// ATM Simulation system
let isPin = true;
let correctPin="12345";
while(isPin !== true){
    isPin=Number (("Enter your pin"));
    if (isPin !== correctPin){
        console.log("Pin is incorrect ask again");

    }
    console.log("Pin is incorrect ask again");
    break;
}
console.log("You entered a correct ");

// DO.... WHILE LOOP
let e= 0;
do {
    console.log("e is" + e);
    e++;
}while(e < 3);

