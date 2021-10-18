// javascript form handling
// get form by using js


let form=document.forms['registrationForm'];

// console.log(form);
form.addEventListener('submit',(e)=>{
    // stop form submission


    e.preventDefault();
    alert('working fine');
    let name=form.elements['userId'];
    let password=form.elements['password'];
    
    let isnameValid=isEmpty(name);
    let ispasswordValid=isEmpty(password);
    if ((isnameValid && ispasswordValid)!=='') {
        // you can submit form here 
        
    }

    
});






// get button id
let btnId= document.getElementById('login-btn');
btnId.addEventListener('click',someFunction);

function someFunction() {
    
let userId =document.getElementById('userId').value;
// alert(userId);
let password=document.getElementById('password').value;
// alert(password);

}
