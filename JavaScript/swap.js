//swapping 2 variables using temp
// var a=10;
// var b=20;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log("a = "+a);
// console.log("b = "+b);

//using bit wise operator
var a=10;
var b=20;
a=a^b;
// console.log(a);
console.log("swapping");
b=a^b;
a=a^b;
console.log(a);
console.log(b);