// arrays in js

// TODO: creating js array
// 1. by using constructor

// let score=new Array();
// console.log(score);

// 2. by using array literal

// let score=[1,2,3,4,5,];
// console.log(score);
// iterarting array
// score.forEach(element => {
//     // print each element
//     console.log(element);
// });

// let mountains=['Everest','K2','Kangchenjunga','Lhotse','Makalu'];
// console.log(mountains[7]);
// console.log(mountains.length);
let sea = ['Maldives', 'Seychelles', 'Bali', 'Thailand', 'Cambodia'];
// sea.push('Phuket');
// sea.unshift('tempSea');
// const lastElement=sea.pop();
// console.log(lastElement);
// console.log(sea);
// const firstElement=sea.shift();
// console.log(firstElement);
// console.log(sea);

// TODO: find the index of the element of the  array

// console.log(sea.indexOf('Seychelles'));
// TODO: if the given value is an array

// let isArray=Array.isArray(sea);
// console.log(isArray);


// TODO: dense array=> array with no holes OR where index are continuous start from zero
// let colors=['red','green','blue','yellow','pink'];
// console.log(colors.length);
// colors.push('black');
// console.log(colors.length);
// colors=[];
// console.log(colors.length);

// TODO: sparse array=> array with holes OR where index are not continuous start from zero
// let days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',,'Sunday'];

// console.log(days.length);

// TODO: empty an array
// let myArray=['a','b','c'];
// myArray.length=0;
// console.log(myArray);

// TODO: stack using js
// problem : reverse a string using this concept
let inputString = document.querySelector('textarea');
let reverseWordHolder = document.querySelector('#reverse-word');
inputString.addEventListener('input', reverseString);

function reverseString(event) {
    inputString = event.target.value;
    let letterHolderStack = [];
    for (let i = 0; i < inputString.length; i++) {
        letterHolderStack.push(inputString[i]);
    }
    let myRequiredWord = '';
    while (letterHolderStack.length > 0) {
        myRequiredWord += letterHolderStack.pop();
    }
    reverseWordHolder.textContent = myRequiredWord;
    // add class to reverseWord to paragraph
    reverseWordHolder.classList.add('reverseWord');
    // add button to div    
    let button = document.createElement('button');
   
    // add a class to button
    button.classList.add('btn');
    button.textContent = 'copy';
    button.addEventListener('click', copyToClipboard);

    // add speaker button which convert text to audio on click
    let speakerButton = document.createElement('button');
    speakerButton.classList.add('new-btn');

    speakerButton.textContent = 'Speaker';
    speakerButton.addEventListener('click', convertToAudio);
    function convertToAudio() {
        let textToSpeak = reverseWordHolder.textContent;
        let utterance = new SpeechSynthesisUtterance(textToSpeak);
        window.speechSynthesis.speak(utterance);
    }

    // input in voice command sppech to text in input tag   
    let voiceCommand = document.createElement('input');
    voiceCommand.classList.add('voice-command');
    voiceCommand.setAttribute('type', 'text');
    voiceCommand.setAttribute('placeholder', 'Voice Command');
    voiceCommand.addEventListener('input', convertToText);
    function convertToText(event) {
        let textToSpeak = event.target.value;
        let utterance = new SpeechSynthesisUtterance(textToSpeak);
        window.speechSynthesis.speak(utterance);
    }
    reverseWordHolder.appendChild(button);
    function copyToClipboard() {
        let textArea = document.createElement('textarea');
        textArea.value = myRequiredWord;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }   
    reverseWordHolder.appendChild(speakerButton);

}








