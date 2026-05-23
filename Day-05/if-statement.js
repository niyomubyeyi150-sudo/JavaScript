//if and else if
// student Grading system
// grade A90-100 ,grade B80-89, grade C 70-79 ,grade D60-69, F 0-59


let score= 55;
if (score>=90){
    console.log("Grade: A ");
}else if(score>=80){
    console.log("Grade: B");
}else if(score>=70){
    console.log("Grade: C");
}else if(score>=60){
    console.log("Grade: D");
}else if(score>=50){
    console.log("Grade: E");
}else {
    console.log("Fail");
}


//Switch statement

let day= "Monday";//initial value or the input value
switch (day) {
    case"Monday":
       console.log("Today is Monday");
       break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    
    case"Wednesday":
       console.log("Today is Wednesday");
        break;
    case"Thursday":
        console.log("Today is Thursday");
        break;

    case"Friday":
        console.log("Today is Friday");
        break;

    case"Saturday":
        console.log("Today is Saturday");
        break;
    case"Sunday":
        console.log("Today is Sunday");
         break;

    default:
        console.log("Invalid Day");
         break;
}

//ATM machine
let balance=1500;
let depositAmount= 5000;
let action= "checkBalance";

switch(action){
 case "withdraw": 
    if (withdrawalAmount < balance){
        balance -= withdrawalAmount;
        console.log("withdraw successful,balance remain: ", + balance );
    }else{
        console.log("insuficient balance");
    }
    break;

 case "deposit":
        if (depositAmount>0){
            balance += depositAmount;
            console.log("deposit successfully, new balance:" ,+ balance );
        }else{
            console.log("invalid amount");
        }
        break;

  case"checkBalance":
    balance += depositAmount;
       console.log("your current balance is:", + balance);
  
       break;
  case" pay bills":
        if (paymentAmount< balance && paymentAmount >0){
        balance -= paymentAmount;
        console.log("payment successful.remaing balance :" + balance);   
}
  default:
         console.log("The action you enter is not valid");
        break;

}
