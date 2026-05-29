let flourweight=500;
let sugarweight=200;
let total=flourweight + sugarweight;
console.log(total ,"grams");
total /= 3;
console.log("each cake will weigh " + total + " grams");
let remainder= total % 3;
console.log("the remainder is " + remainder + " grams");
let grams=remainder % 3;
console.log("the grams that will be left is " + grams + " grams");


let initialBalance=1000;
initialBalance += 500;
initialBalance -=150;
initialBalance *= 2;
console.log("balance after deposit is",initialBalance);


let isPremiumMember = true;      
let cartTotal = 500;              
let isFraudulent = false; 
let  isDiscountCode= true;


// Logic: (Premium OR Cart > 100) AND NOT Fraudulent
let  getsFreeShipping = cartTotal > 100 && (isPremiumMember == true|| isDiscountCode == true) && !isFraudulent;

if (getsFreeShipping) {
  console.log("Free shipping applied!");
} else {
  console.log("free shipping not applied");
}   

