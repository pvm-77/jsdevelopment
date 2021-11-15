let querySelect = document.querySelector('#query-select');
let ansSelect = document.querySelector('#answer-select');
let selectQuantityElement = document.querySelector('#physical_quantity');


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



function handleChildSelectPhysicalEntity(lstPhysicalQuantity, querySelect, answerSelect) {

    if (querySelect.hasChildNodes()) {
        querySelect.innerHTML = '';
        // loop throguh each object in array
        for (let key in lstPhysicalQuantity) {
            // console.log(key);

            addOption(querySelect, key, lstPhysicalQuantity[key]);
            addOption(answerSelect, key, lstPhysicalQuantity[key]);

        }


    }
}

selectQuantityElement.addEventListener("change", function (event) {
    selectedQuantityValue = event.target.value;
    // console.log(selectedQuantityValue);
    switch (selectedQuantityValue) {
        case 'numberSystem':
            handleChildSelectPhysicalEntity(numberSystemObject, querySelect, ansSelect);
            break;
        case 'length':
            handleChildSelectPhysicalEntity(lengthObject, querySelect, ansSelect);
            break;
        case 'speed':
            handleChildSelectPhysicalEntity(speedObject, querySelect, ansSelect);
            break;
        case 'mass':
            handleChildSelectPhysicalEntity(massObject, querySelect, ansSelect);
            break;
        case 'digitalStore':
            handleChildSelectPhysicalEntity(digitalStoreObject, querySelect, ansSelect);
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
        console.log(querySelect.value);
        console.log(ansSelect.value);
        changeOneUnitToOther(inputValue, querySelect.value, ansSelect.value);
    }
}
);

function convert(value, supplyUnit, requiredUnit) {

    var result = 0;
    switch (requiredUnit) {
        case 'mg':
            switch (supplyUnit) {
                case 'g':
                    result = value * 1000;
                    break;
                case 't':
                    result = (value * 1000000000).toExponential(4);
                    break;
                case 'oz':
                    result = (value * 28350);
                    break;
                case 'lb':
                    result = (value * 453592).toExponential(4);;
                    break;
                case 'st':
                    result = (value * 6350000) * toExponential(4);
                    break;
                case 'kg':
                    result = (value * 1000000).toExponential(4);

                    break;
                default:
                    break;
            }
            break;

        case 'g':
            switch (supplyUnit) {
                case 'mg':
                    result = value / 1000;
                    // console.log(result);
                    break;
                case 'kg':
                    result = value * 1000;
                    break;
                case 't':
                    result = (value * 1000000).toExponential();
                    break;
                case 'oz':
                    result = value * 28.35;
                    break;
                case 'lb':
                    result = value * 454;
                    break;
                case 'st':
                    result = value * 6350;
                    break;

                default:
                    break;
            }
            break;
        case 'kg':
            switch (supplyUnit) {
                case 'mg':
                    result = (value / 1000000).toExponential();
                    // alert(result);
                    break;
                case 'g':
                    result = value / 1000;
                    alert(result);
                    break;
                case 't':
                    result = value * 1000;
                    break;
                case 'oz':
                    result = value / 35.274;
                    break;
                case 'lb':
                    result = (value / 2.205).toExponential();
                    break;
                case 'st':
                    result = (value * 6.35).toExponential(4);
                    break;
                default:
                    break;
            }
            break;

        case 't':
            switch (supplyUnit) {
                case 'mg':
                    result = value / 1000000000;
                    alert(result);
                    console.log(result);
                    break;
                case 'g':
                    break;
                case 'kg':
                    break;
                case 'oz':
                    break;
                case 'lb':
                    break;
                case 'st':
                    break;
                default:
                    break;
            }
            break;
        case 'oz':
            switch (supplyUnit) {
                case 'mg':
                    result = (value / 28350).toExponential(4);
                    alert(result);
                    break;
                case 'g':
                    break;
                case 'kg':
                    break;
                case 't':
                case 'lb':
                    break;
                case 'st':
                    break;
                default:
                    break;
            }
            break;
        case 'lb':
            switch (supplyUnit) {
                case 'mg':
                    result = (value / 453592).toExponential(4);
                    break;
                case 'g':
                    break;
                case 'kg':
                    break;
                case 'oz':
                    break;
                case 't':
                    break;
                case 'st':
                    break;
                default:
                    break;
            }
            break;
        case 'st':
            switch (supplyUnit) {
                case 'mg':
                    result = (value / 6350000).toExponential(4);
                    // alert(result);
                    break;
                case 'g':
                    result = value * 6350;
                    break;
                case 'kg':
                    result = value * 6.350;

                    break;
                case 'oz':
                    result = value * 224;

                    break;
                case 'lb':
                    result = value * 14;

                    break;

                default:
                    break;
            }
            break;
        default:
            break;
    }
    return result;
}



function changeOneUnitToOther(value, supplyUnit, otherUnit) {
    let result = 0;
    result = convert(value, supplyUnit, otherUnit);
    // add this result to right answer input box
    document.querySelector('#answer').value = result;
}
