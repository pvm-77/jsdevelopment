function sayHello() {
    console.log("Hello World");
}





// resultReturnBySayHello=sayHello();
// console.log(resultReturnBySayHello);
// function add(a,b){
//     a=a+1;
//     b=b+3;
//     return a+b;
// }
/* primitive value send as
argument changes them in function 
not reflect any change in them outs
ide the function 
*/

// let a=6;
// let b=7;
// console.log(add(a,b));
// console.log(a);
// console.log(b);
/*
but change reflected in non primary obj
*/
// function  company(carObj) {
//     carObj.company="BMW corp";
//     // console.log(carObj);

// }
// var carObj={
//     name:"BMW",
//     model:"X5",
//     year:2018
// }
// console.log(carObj);
// company(carObj);
// console.log(carObj);


// function compare(a,b){
//     if(a>b){
//         return true;
//     }
//     else if(a<b){
//         return false;
//     }
//     else{
//         return undefined+"hi";
//     }
// }
// console.log(compare(5,5));

// function send(message){
//     // show nothing if message is empty
//     if(!message){
//         return;
//     }
//     // show message if message is not empty
//     console.log(message);
// }
// send();

// first class citizen in js
// let arithmetics={
//     add:function(a,b){
//         return `${a} + ${b} = ${a+b}`;
//     }
// }
// console.log(arithmetics.add(5,6));


// store function in variable
/*
function add(a,b){
    return a+b;
}
let sum=add;
console.log(sum(5,6));
console.log(add(5,6));
*/

// higher order functions

// function add(a,b){
//     return a+b;
// }
// // let sum=add;
// function average(a,b,fn) {
//     return fn(a,b)/2;
// }
// console.log(average(50,6,add));

// anonymous functionn
// let a=function(a,b,
//     ){
//         return a+b;
//     }
//     console.log(a(5,6));


// setTimeout(function () {
//     console.log("execute 5 second later bro!");

// },5000);

// IIFE
// (function(){console.log('hi bro')})();
// (function(){
//     console.log('hi bro');
// })();


// let person={name:'sarfaraz ',
//     age:23,};

// (function(){
//     console.log(`${person.name} ${person.age}`);
// })(person);

// arrow function
// let show=()=>{console.log('hi bro i am arrow function')};
// console.log(show());


// callback function 

// console.log(quoteContent);

function generateQuote() {
    let btn = document.querySelector('button');
    btn.addEventListener('click', printQuote);
}

function printQuote() {

    let quoteContent = {
        quote: document.querySelector('textarea').value,
        author: document.querySelector('input').value,
    }
    // console.log(quoteContent);
    // generate a div having p and span tag 
    let div = document.createElement('div');
    // add temp class to div
    div.classList.add('temp');
    
    let p = document.createElement('p');
    let h5 = document.createElement('h5');
    
    // h5.classList.add('author');
    p.innerHTML = quoteContent['quote'];
    h5.innerHTML ='^^^'+quoteContent['author'];
    div.appendChild(p);
    div.appendChild(h5);
    // append div to index.html file
    document.querySelector('body').appendChild(div);
    // empty textarea and input
    document.querySelector('textarea').value = '';
    document.querySelector('input').value = '';


}
generateQuote();
