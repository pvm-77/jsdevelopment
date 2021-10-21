let getForm = document.forms[0];

// all the error while registration
const FIRST_NAME_REQUIRED = "please enter your first name";
const LAST_NAME_REQUIRED = "please enter your last name";
const PASSWORD_REQUIRED = "please fill the password";
const CONFIRM_PASSWORD_REQUIRED = "please fill the confirm password";
const EMAIL_REQUIRED = "please enter your email";
const INVALID_EMAIL = "please enter a correct format of the email";
const PASSWORD_NOT_MATCH = "your password do not match";

getForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // validate the form
    // get the values of the forms
    let validateFirstName = isEmpty(getForm.elements[0], FIRST_NAME_REQUIRED);
    let validatlastName = isEmpty(getForm.elements[1], LAST_NAME_REQUIRED);
    let validEmail = validateEmail(getForm.elements["email"], EMAIL_REQUIRED, INVALID_EMAIL);
    let validPassword = isEmpty(getForm.elements["password"], PASSWORD_REQUIRED);
    //   let validConfirmPassword = isEmpty(getForm.elements["confirmPassword"],CONFIRM_PASSWORD_REQUIRED);
    passwordMatch(getForm.elements['confirmPassword'],getForm.elements['password'],CONFIRM_PASSWORD_REQUIRED,PASSWORD_NOT_MATCH);
});

// show a message witha type of input
function showMessage(input, message, type) {
    // get the 'small element ' and set the meassge there
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    // update the class for input
    input.className = type ? "success" : "error";
    return type;
}
function showError(yourInputContent, message) {
    return showMessage(yourInputContent, message, false);
}
function showSuccess(yourInputContent) {
    return showMessage(yourInputContent, "", true);
}
function isEmpty(yourInputContent, message) {
    if (yourInputContent.value.trim() === "") {
        return showError(yourInputContent, message);
    }
    return showSuccess(yourInputContent);
}

function validateEmail(yourInputContent, requiredMsg, invalidMsg) {
    // check first email field empty
    if (!isEmpty(yourInputContent, requiredMsg)) {
        return false;
    }
    // handling email format
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = yourInputContent.value.trim();
    if (!emailRegex.test(email)) {
        return showError(yourInputContent, invalidMsg);
    }
    return true;
}

function passwordMatch(yourInputContent, password, requiredMsg, doNotMatchPasswordMsg) {
    // check first confirm password field empty
    if (!isEmpty(yourInputContent, requiredMsg)) {
        return false;
    }
    // handling matching of password
    const confirmPassword = yourInputContent.value.trim();
    const userPassword = password.value.trim();
    if (confirmPassword !== userPassword) {
        return showError(yourInputContent, doNotMatchPasswordMsg);
    } else {

    }
    return true;
}

function emailAlreadyExists() { }
