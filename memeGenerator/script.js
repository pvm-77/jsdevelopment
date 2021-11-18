// function onDragStart(event) {
//     event.dataTransfer.setData("text", event.target.id);
//     // To update the dragged item’s CSS styling, we need to access the element’s style property.
//     // event.currentTarget.style.background = "yellow";
// }


// function dragover(event) {
//     event.preventDefault();
// }


// function onDrop(event) {
//     event.preventDefault();
//     var data = event.dataTransfer.getData("text");
//     event.target.appendChild(document.getElementById(data));
//     event.currentTarget.style.background = "";
// }
// function onDragEnd(event) {
//     event.currentTarget.style.background = "#4AAE9B";
// }
let elementForDrag = document.getElementsByClassName('drag-content');
console.log(elementForDrag);
// elementForDrag.addEventListener('dragstart',dragStart);




function dragStart(event){
   
}

function dragOver(event){
    event.preventDefault();
   
}
function onDrop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData('text/html');
    event.target.insertAdjacentHTML('beforebegin',data);
    event.target.parentNode.removeChild(event.target);


}
// get the place where item to be drop
var dropZone = document.querySelector('drop-zone');
// add event listener to drop zone
dropZone.addEventListener('dragover',dragOver);
dropZone.addEventListener('drop',onDrop);


