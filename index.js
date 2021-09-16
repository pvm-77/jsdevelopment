// {

// temporal dead zone fro const and let
// console.log(x);
// var x=3;
// }

// function g() {
// }
// const g=6;
// console.log(g);

// function b() {
//     return 3;
// }

// b();
// console.log(b());

// function greeting() {
//     console.log('good evening sir');

// }
// greeting();

// var hi= function sayHi(){
//     console.log('good afternoon sir');
// };
// console.log(hi);
// alert(hi);
// const area=function calculateArea(a,b) {
//     return a*b;

// }
// // var myname=area;
// // alert(area(2,4));
// console.log(calculateArea(3,6));

// // IIFE
// (function () {
//     console.log(' im IIFE');

// })();

// // traditional anonymous function
// let a=function (a,b) {
//     return a+b+1;

// }
// console.log(a(1,2));
// // change above code 57-60 line into arrow function

// let z=(m,n)=>{return m+n+1;}
// console.log(z(4,5));

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }

//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

var ask=(question,yes,no)=>{
    if (confirm(question)) {
        yes();
        
    } else {
        no();
    }
}
ask('Do you agree',()=>{alert('u agreed');},()=>{alert('u not agreed');});