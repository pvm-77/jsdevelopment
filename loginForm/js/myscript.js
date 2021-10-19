let form = document.forms["loginForm"];
form.addEventListener("submit", function (event) {
  // stop default  form submission
  event.preventDefault();
  let name = form.elements["userId"].value;
  let password = form.elements["password"].value;
});

function showOnError() {}
function showOnSuccess() {}

function validEmail(InputEmail) {}
function isEmpty(InputElement) {
  if (InputElement !== "") {
    return false;
  } else {
    return true;
  }
}
// password hide and show functionality



let togglePassword = document.querySelector("#togglePassword");
let password = document.querySelector("#password");

togglePassword.addEventListener("click", showAndHidePassword
// (e) => {
//   // stop the default behaviour
//   e.preventDefault();
//   //    toggle the type atttribute
//   let type = password.getAttribute("type");
//   if (type === "password") {
//     type = "text";
//     password.setAttribute("type", type);
//     togglePassword.classList.replace("fa-eye-slash","fa-eye");
//   } else {
//     type = "password";
//     password.setAttribute("type", type);
//     togglePassword.classList.replace("fa-eye","fa-eye-slash");

//   }
// }


);

function showAndHidePassword(){
    // get the type of the attribute 
    const type=password.getAttribute('type')==='password'?'text':'password';
    // set the attribute 
    password.setAttribute('type',type);
    // handle icon as well initially slash eye
   this.classList.add('fa-eye');



}