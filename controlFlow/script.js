let numberSystemObject = {
    'bin': 'Binary',
    'ter': 'Ternary',
    'qua': 'Quaternary',
    'qui': 'Quinary',
    'sen': 'Senary',
    'sep': 'Septenary',
    'oct': 'Octal',
    'non': 'Nonary',
    'dec': 'Decimal',
    'und': 'Undecimal',
    'duo': 'Duodecimal',
    'hex': 'Hexadecimal',
    'vig': 'Vigesimal',
    'sex': 'Sexagesimal',
};
let digitalStoreObject = {
    'b': 'Byte',
    'kb': 'Kilobyte',
    'mb': 'Megabyte',
    'gb': 'Gigabyte',
    'tb': 'Terabyte',
    'pb': 'Petabyte'
};
let massObject = {

    'mg': 'Milligram',
    'g': 'Gram',
    'kg': 'Kilogram',
    't': 'Ton',
    'oz': 'Ounce',
    'lb': 'Pound',
    'st': 'Stone'
};

let speedObject = {
    'mph': 'Miles per hour',
    'kph': 'Kilometers per hour',
    'fps': 'Feet per second',
    'knot': 'Knot'
};
let lengthObject = {
    'mm': 'Millimeter',
    'cm': 'Centimeter',
    'm': 'Meter',
    'km': 'Kilometer',
    'in': 'Inch',
    'ft': 'Feet',
    'yd': 'Yard',
    'mi': 'Mile'
};
let lstPhysicalQuantity=[];
lstPhysicalQuantity.push(lengthObject,speedObject,massObject,digitalStoreObject,numberSystemObject);
// console.log(lstPhysicalQuantity);


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

var age = 19;
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
let querySelect = document.querySelector('#query-select');
let ansSelect = document.querySelector('#answer-select');
let selectQuantityElement = document.querySelector('#physical_quantity');
selectQuantityElement.addEventListener("change", function (event) {
    // check previous value of select element
    // let previousValue=event.target.value;
    // make it empty    
    // find index of selected option
    // let selectedIndex=selectQuantityElement.selectedIndex;
    // console.log(selectedIndex);
    selectedQuantityValue = event.target.value;
    console.log(selectedQuantityValue);
    switch (selectedQuantityValue) {
        case 'numberSystem':
            let numberSystemObject = {
                'bin': 'Binary',
                'ter': 'Ternary',
                'qua': 'Quaternary',
                'qui': 'Quinary',
                'sen': 'Senary',
                'sep': 'Septenary',
                'oct': 'Octal',
                'non': 'Nonary',
                'dec': 'Decimal',
                'und': 'Undecimal',
                'duo': 'Duodecimal',
                'hex': 'Hexadecimal',
                'vig': 'Vigesimal',
                'sex': 'Sexagesimal',
            };

            if (querySelect.hasChildNodes()) {
                // remove all child nodes
                querySelect.innerHTML = '';
                ansSelect.innerHTML = '';
                // loop through the object
                for (let key in numberSystemObject) {
                    // add option to the select element 
                    addOption(querySelect, key, numberSystemObject[key]);
                    addOption(ansSelect, key, numberSystemObject[key]);
                }


            }


            break;
        case 'length':
            // // alert("length");
            // console.log("you have selected length");
            // add child to the select element in another select tag
            // object to hold all values of length
            let lengthObject = {
                'mm': 'Millimeter',
                'cm': 'Centimeter',
                'm': 'Meter',
                'km': 'Kilometer',
                'in': 'Inch',
                'ft': 'Feet',
                'yd': 'Yard',
                'mi': 'Mile'
            };
            // check select option empty or not 
            if (querySelect.hasChildNodes()) {
                // remove all child nodes
                querySelect.innerHTML = '';
                ansSelect.innerHTML = '';
                // loop through the object
                for (let key in lengthObject) {
                    // add option to the select element 
                    addOption(querySelect, key, lengthObject[key]);
                    addOption(ansSelect, key, lengthObject[key]);
                }

            }


            break;
        case 'speed':
            let speedObject = {
                'mph': 'Miles per hour',
                'kph': 'Kilometers per hour',
                'fps': 'Feet per second',
                'knot': 'Knot'
            };
            if (querySelect.hasChildNodes()) {
                querySelect.innerHTML = '';
                ansSelect.innerHTML = '';
                for (let key in speedObject) {
                    addOption(querySelect, key, speedObject[key]);
                    addOption(ansSelect, key, speedObject[key]);
                }

            }



            break;
        case 'mass':
            let massObject = {

                'mg': 'Milligram',
                'g': 'Gram',
                'kg': 'Kilogram',
                't': 'Ton',
                'oz': 'Ounce',
                'lb': 'Pound',
                'st': 'Stone'
            };
            if (querySelect.hasChildNodes()) {
                querySelect.innerHTML = '';
                ansSelect.innerHTML = '';
                for (let key in massObject) {
                    addOption(querySelect, key, massObject[key]);
                    addOption(ansSelect, key, massObject[key]);
                }
            }


            break;
        case 'digitalStore':
            let digitalStoreObject = {
                'b': 'Byte',
                'kb': 'Kilobyte',
                'mb': 'Megabyte',
                'gb': 'Gigabyte',
                'tb': 'Terabyte',
                'pb': 'Petabyte'
            };
            if (querySelect.hasChildNodes()) {
                querySelect.innerHTML = '';
                ansSelect.innerHTML = '';
                for (let key in digitalStoreObject) {
                    addOption(querySelect, key, digitalStoreObject[key]);
                    addOption(ansSelect, key, digitalStoreObject[key]);
                }
            }


            break;

        default:
            break;
    }



});
function addOption(selectElement, optionValue, optionText) {
    // create option element    
    let optionElement = document.createElement('option');
    // set value of option element
    optionElement.value = optionValue;
    // set text of option element
    optionElement.textContent = optionText;
    // empty option
    // append option element to select element
    selectElement.appendChild(optionElement);
}



// create a function to get user input from input tag in js
function getInput() {
    // get input value
    var inputValue = document.querySelector('input').value;
    console.log(inputValue);
    // check if the input value is a number
    if (!isNaN(inputValue)) {

    }
}


document.querySelector('input').addEventListener("input", function (event) {
    // prevent default behaviour of the event
    event.preventDefault();
    // get input value
    var inputValue = document.querySelector('input').value;
    // check if the input value is a number
    if (!isNaN(inputValue)) {
        console.log(inputValue);

    }

}
);



