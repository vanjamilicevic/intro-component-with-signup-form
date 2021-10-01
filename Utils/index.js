
function validateEmail(email) {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('button').addEventListener('click', function() {

    nameValue = document.getElementById("name-input").value
    lastNameValue = document.getElementById("last-name-input").value
    emailValue = document.getElementById("email-input").value;
    passvordValue = document.getElementById("password-input").value

    if (!nameValue) {
        document.getElementsByClassName("hidden-warning")[0].style.visibility = "visible";
        document.getElementById("name-input").style.borderColor = "#FF7979";
        document.getElementById("name-input").classList.remove("transparent");
        document.getElementById("name-input").placeholder = "";
    } else {
        document.getElementsByClassName("hidden-warning")[0].style.visibility = "hidden";
        document.getElementById("name-input").style.borderColor = "#DEDEDE";
        document.getElementById("name-input").classList.add("transparent");
    }

    if (!lastNameValue) {
        document.getElementsByClassName("hidden-warning")[1].style.visibility = "visible";
        document.getElementById("last-name-input").style.borderColor = "#FF7979";
        document.getElementById("last-name-input").classList.remove("transparent");
        document.getElementById("last-name-input").placeholder = "";
    } else {
        document.getElementsByClassName("hidden-warning")[1].style.visibility = "hidden";
        document.getElementById("last-name-input").style.borderColor = "#DEDEDE";
        document.getElementById("last-name-input").classList.add("transparent");
    }
    
    if (!validateEmail(emailValue)) {
        document.getElementsByClassName("hidden-warning")[2].style.visibility = "visible";
        document.getElementById("email-input").style.borderColor = "#FF7979";
        document.getElementById("email-input").classList.remove("transparent");
        document.getElementById("email-input").style.color = "#FF7979";
    } else {
        document.getElementsByClassName("hidden-warning")[2].style.visibility = "hidden";
        document.getElementById("email-input").style.borderColor = "#DEDEDE";
        document.getElementById("email-input").classList.add("transparent");
        document.getElementById("email-input").style.color = "#3D3B48";
    }

    if (!passvordValue) {
        document.getElementsByClassName("hidden-warning")[3].style.visibility = "visible";
        document.getElementById("password-input").style.borderColor = "#FF7979";
        document.getElementById("password-input").classList.remove("transparent");
        document.getElementById("password-input").placeholder = "";
    } else {
        document.getElementsByClassName("hidden-warning")[3].style.visibility = "hidden";
        document.getElementById("password-input").style.borderColor = "#DEDEDE";
        document.getElementById("password-input").classList.add("transparent");
    }
});