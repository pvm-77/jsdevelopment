// function to handle login process
function login() {
    // get the username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // create a new instance of XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // open a connection to the server
    xhr.open('POST', 'login.php', true);
    // set the request header
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // send the request
    xhr.send('username=' + username + '&password=' + password);
    // handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // get the response from the server
            var response = xhr.responseText;
            // check if the login was successful
            if (response == "success") {
                // redirect the user to the home page
                window.location.href = "index.php";
            } else {
                // display an error message
                document.getElementById("error").innerHTML = response;
            }
        }
    }
}
// function to handle registration process
function register() {
    // get the username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // create a new instance of XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // open a connection to the server
    xhr.open('POST', 'register.php', true);
    // set the request header
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // send the request
    xhr.send('username=' + username + '&password=' + password);
    // handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // get the response from the server
            var response = xhr.responseText;
            // check if the registration was successful
            if (response == "success") {
                // redirect the user to the home page
                window.location.href = "index.php";
            } else {
                // display an error message
                document.getElementById("error").innerHTML = response;
            }
        }
    }
}
// function to handle logout process
function logout() {
    // create a new instance of XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // open a connection to the server
    xhr.open('POST', 'logout.php', true);
    // set the request header
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // send the request
    xhr.send();
    // handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // redirect the user to the home page
            window.location.href = "index.php";
        }
    }
}
// function to handle the search process
function search() {
    // get the search term
    var searchTerm = document.getElementById("searchTerm").value;
    // create a new instance of XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // open a connection to the server
    xhr.open('POST', 'search.php', true);
    // set the request header
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // send the request
    xhr.send('searchTerm=' + searchTerm);
    // handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // get the response from the server
            var response = xhr.responseText;
            // display the results
            document.getElementById("results").innerHTML = response;
        }
    }
}
// function to handle login validation
function validateLogin() {
    // get the username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // create a new instance of XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // open a connection to the server
    xhr.open('POST', 'validateLogin.php', true);
    // set the request header
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // send the request
    xhr.send('username=' + username + '&password=' + password);
    // handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // get the response from the server
            var response = xhr.responseText;
            // check if the login was successful
            if (response == "success") {
                // redirect the user to the home page
                window.location.href = "index.php";
            } else {
                // display an error message
                document.getElementById("error").innerHTML = response;
            }
        }
    }
}
// function to handle registration validation
function validateRegistration() {
    // get the username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // create a new instance of XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // open a connection to the server
    xhr.open('POST', 'validateRegistration.php', true);
    // set the request header
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // send the request
    xhr.send('username=' + username + '&password=' + password);
    // handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // get the response from the server
            var response = xhr.responseText;
            // check if the registration was successful
            if (response == "success") {
                // redirect the user to the home page
                window.location.href = "index.php";
            } else {
                // display an error message
                document.getElementById("error").innerHTML = response;
            }
        }
    }
}   
// function to handle register button click
function registerClick() {
    // hide the login form
    document.getElementById("loginForm").style.display = "none";
    // show the registration form
    document.getElementById("registerForm").style.display = "block";
}
// function to handle login button click
function loginClick() {
    // hide the registration form
    document.getElementById("registerForm").style.display = "none";
    // show the login form
    document.getElementById("loginForm").style.display = "block";
}



// function to handle speech to text on button click
function startSpeechToText() {
    // create a new instance of XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // open a connection to the server
    xhr.open('POST', 'startSpeechToText.php', true);
    // set the request header
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // send the request
    xhr.send();
    // handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // get the response from the server
            var response = xhr.responseText;
            // display the results
            document.getElementById("results").innerHTML = response;
        }
    }
}

// function text to speech on button click
function startTextToSpeech() {
    // create a new instance of XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // open a connection to the server
    xhr.open('POST', 'startTextToSpeech.php', true);
    // set the request header
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // send the request
    xhr.send();
    // handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // get the response from the server
            var response = xhr.responseText;
            // display the results
            document.getElementById("results").innerHTML = response;
        }
    }
}
function textToSpeech() {
    // get the text to be converted
    var text = document.getElementById("text").value;
    // create a new instance of XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // open a connection to the server
    xhr.open('POST', 'textToSpeech.php', true);
    // set the request header
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // send the request
    xhr.send('text=' + text);
    // handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // get the response from the server
            var response = xhr.responseText;
            // display the results
            document.getElementById("results").innerHTML = response;
        }
    }
}
