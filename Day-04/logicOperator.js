let a=5;
let b=10;
let password="1234-523232323234er";
let age=40;
let c=2;
let d=2;


//Greater than >
if (a>b){
    console.log("a is greater than b");
}else{
    console.log("a is not greater than b");
}

// less than<
if( a<b){
    console.log("a is less than b");  
}else{
    console.log("a is not less than b");
}

// greater than or equal >=
if(password.length >= 6){
    console.log("password is Valid");
}else{
    console.log("password is invalid");
}

//less than or equal <=
if(age<= 18){
    console.log("you are not allowed to vote");
}else{
    console.log("you are allowed to vote");
}

//Strict equality ===
if(c===d){
    console.log("c is equal to d");
}else 
    { console.log("c is not equal to d");

    }

    //loose equality ==

//Strict equality ===
if(c==d){
    console.log("c is equal to d");
}else 
    { console.log("c is not equal to d");

    }

    //AND operator &&
    // on the AND operator both condition must be true for the whole expresion to be true
    if (age>=18 && password.length >=6){
        console.log("you are allowed to vote and password is valid");
    }else{
       console.log("you are  not allowed to vote and password is invalid");  
    }


    //OR Operator ||
    // on OR operator at least one condition must be true for the whole expresion to become true

if (age>=18 || password.length >=6){
        console.log("you are allowed to vote or password is valid");
    }else{
       console.log("you are  not allowed to vote or password is invalid");  
    }



let e=5;
let f=10;
e %=2;
console.log(e);
e +=f;
e -=1;
console.log(e);

if(!(age >= 18)){
    console.log("you are  allowed to vote"); // the condition is true
}else{
    console.log("you are  not allowed to vote");// the condition is false
}

