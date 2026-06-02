// we  have many ways of dom manupulation in js these include
// 1. get an element by class 
const title = document.getElementsByClassName("title-card");
console.log(title);
title[0].style.color = "red";
title[0].style.fontSize = "50px";
title[0].innerText = "This is a tree";



