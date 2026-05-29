// Function in JavaScript are a way to encapslate a bolck of code that performs a special
// function is made up of parameter and arguments

function greet(greeting){
    return greeting + " " +  "Nadine";
}
console.log(greet("Hello"));

let a = 2;
let b = 10;
let c = a + b;
console.log(c);


function add (a,b){
    return a+b;  
}
 console.log(add(10,40));
 console.log(add(100,200));


 function sayHi() {
    console.log("Hi");
 }
  sayHi(); // this is what we call function recursion (when function calls itsself)

  function test() {}
    test.custom ="hello these are test";
  
  console.log(test.custom);
  // this are types of parameter in javascript
     // Default parameter
  function greet(name = "Guest"){
    return name;
  }
  console.log (greet());
     // rest parameter
     const number =[1,2,3,4,5,6,7,8,9,10]
     function sum (...number){
        return number.reduce((c,d)=> c+d,0);
     }
     console.log(sum(1,2,3,4,5,6,7,8,9,10));
// foreach method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum2 = 0;

numbers.forEach((num) => {
  sum2 += num;
});

console.log(sum2); 

// by using loop

function sum3(...numbers){
let sumNumber =0;
for (let i = 0; i < numbers.length; i++) {
  sum3 += numbers[i];
}
return sumNumber;
console.log(sum3(1,2,3,4,5,6,7,8,9,10)); 
}
// Destructuring these is a method of extracting values from arrays or object and assigning them to variables.
// the destructuring  in an array

const arr=[1,2,3,4,5,6,7,8,9,10];
const [d,e,f] = arr;
console.log(d);
console.log(e);
console.log(f);

// in an object
const user ={
    name1:"Nadine",
    age:20,
    gender:"female",
    occupation: "IT Engineer",
    country:"Niger",
    phonenumber:"079123443",
    email:"eabfgrh@gmail.com",
}
function createUser({name1,email ,phonenumber}){
    console.log(name1);
    console.log(email);
    console.log(phonenumber);
}
createUser(user);

let x=10;
function int (){
    console.log(x);
}
int();
const user2={
    name: "Nadine",
    getName(){
        return this.name
}
}
console.log(user2.getName());

// closure
function outer (){
    let counter =0;
    return function inner (){
        counter++;
        return counter
    }
}
const increment =outer ();
console.log(increment());



// types of function with their syntax
// arrow function
const get = ()=>{
    return"hello world";
}
// function declaration
function get (){
    return "hello world";
}
// function expression 
const get = function(){
return "hello world";
}
// Anomynous function
const anonymous=function (){
    return "hello world";
}
// asychronous function
const get =async ()=>{
    return "hello world";
}
