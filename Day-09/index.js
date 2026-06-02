// we  have many ways of dom manupulation in js these include
// 1. get an element by class 
const title = document.getElementsByClassName("title-card");
console.log(title);
title[0].style.color = "red";
title[0].style.fontSize = "50px";
title[0].innerText = "This is a tree";
// 2 get an element by id

const title2 = document.getElementById("title");
console.log(title2);

// 3 get an element by tag

const title3 = document.getElementsByTagName("h1");
console.log(title3);


//  DOM Traversal

const el = document.querySelector("section");

el.parentNode.style.backgroundColor = "green";

console.log(el);
// 4 get an element by name



// 5 get an element by attribute


// 6 get an element by query selector


// 7 get an element by query selector all


// 8 get an element by get elements by class name



