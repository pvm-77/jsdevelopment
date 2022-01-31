// let unit={
//     unitId:"101",
//     unitName:"Unit 1",
//     subjectName:"Physics",
//     subjectCode:"PHY101",
//     getIntro:function(){
//         console.log(`my unit name is ${this.unitName} `);
//     },
// }
// console.log(unit);

// let chapter={
//     chapterId:"101",
//     chapterName:"Chapter 1",  
// }
// console.log(chapter);

// function display(){
//     console.log(`i am sfz`);
// }

// illustration for this

// function identify(){
//     return this.name.toUpperCase();

// }

// function speak(){
//     var greeting='hello , i am'+identify.call(this);
//     console.log(greeting);

// }
// var me={
//     name:'kyle'
// };
// var you={
//     name:'Reader'

// };
// identify.call(me);
// identify.call(you);
// speak(me);
// speak(you);

// function identify(context){

//     return context.name.toUpperCase();

// }
// function speak(context){
//     let greeting='hello , iam'+identify(context);
//     console.log(greeting);
// }
// let t=identify(you);
// console.log(t);
// speak(me);

// ###############//


// function foo(num){
//     console.log("foo:"+num);
//     this.count++;
// }
// foo.count=0;
// for(var i=0;i<10;i++){
//     if(i>5)
//     foo(i);
// }
// console.log(foo.count);


// function foo(num){
//     console.log("foo:"+num);
//     // keep track how many times foo called
//     data.count++;
// }
// var data={
//     count:0,
// }
// for(var i=0;i<10;i++){
//     if(i>5)
//     foo(i);
// }
// console.log(data.count);

// **********************//
// call stack and call site

function baz(){
    // call stack -->baz
    // call site --> is in global scope
    console.log("baz");
    bar();  // this is call site for bar

}


function bar(){
    // call stack is : baz->bar
    // so our call-site is in baz
    console.log("bar");
    //foo();  //call site for foo
}


// function foo(){
    // call stack is : baz->bar->foo
    // so our call-site is in bar
    // console.log("foo");
// }
baz();  // call site for baz

// function foo(){
//     "use strict";
//     console.log(this.a);
// }
// var a=2;
// foo();


// &&&&&&&&&&&&&&&&&
// implicit binding
function foo(){
    console.log(this.a);
}
var obj={a:2,
foo:foo
};

obj.foo();






