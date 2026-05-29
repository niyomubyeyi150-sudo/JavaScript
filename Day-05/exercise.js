//Restaurant menu
//menu
//1 Drink : water,soda; juice,milk;

let order ="drink";
let price = 100;

switch(order){
    case "drink":
        console.log("1. water,2.soda ,3. juice ,4. milk");
        console.log("Enter the number of the drink you want ");
        console.log("Enter the quantity ");
        console.log("The total price is: ");
        break;
    case"fast food":
    console.log("1. pizza ,2. burger, 3.fries ,4.salad ,5. sandwitch");
    console.log("Enter the number of the food you wnant ");
    console.log("Enter the quantinty ");
    console.log("Total price is :  ");
    break;
    case"coffee":
     console.log("1. espresso ,2. latte, 3.cappuccino,4.mocha ,5. flat white");
    console.log("Enter the number of the coffee you wnant ");
    console.log("Enter the quantinty ");
    console.log("Total price is :  ");
    break;
    default:
        console.log("invalid order");
        break;

}