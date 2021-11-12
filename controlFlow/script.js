

// let getInput=document.querySelector("input");

// add event listener to the input
// getInput.addEventListener("blur",function(event){

//     event.preventDefault();
    // get input value
    // var inputValue=document.querySelector('input').value;
    // console.log(inputValue);
    // check if the input value is a number
    // if(!isNaN(inputValue)){
        // check if the input value is less than 18
        // if(inputValue<18){
            // display error message
        //     document.querySelector('.error').innerHTML="You are not allowed to enter";
        // }
        // else{       

            // display success message

//             document.querySelector('.error').innerHTML="You are allowed to enter";
//         }
        
//     }
//     else{
//         alert("Please enter a number");
//     }


// });



// ternary operator 

var age=19;
var canDrive;
// if (age>16){
//     canDrive='yes';
// } 
    
//  else {
//     canDrive='no';
// }

// above code using ternary operator

// canDrive=age>16?'yes':'no';
// console.log(canDrive);
// ternary op use to set dfault value of parameter

let selectItem=document.querySelector('select');
// alert(selectItem.value);
console.log(selectItem);

selectItem.addEventListener('change',function(event){ 
    let selectedValue=event.target.value;
    console.log(selectedValue);


});
