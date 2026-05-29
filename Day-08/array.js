const arr = [1,2,3,4,5,6,7,8,9,10];
// array methods
// 1. push( )-add an element at the end of an array
arr.push(11);
delete arr[1];
arr.splice(0, 3, "mango", "grapes");
console.log(arr);
// 2. pop()- this extract an element from the end
arr.pop();
// 3. shift()removes an element at the begining
arr.shift();
// 4. unshift() add an element at the begining of the array
arr.unshift();