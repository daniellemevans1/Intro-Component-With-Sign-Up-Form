const formEl = document.querySelector("#hero-form");
const firstNameEl = document.querySelector("#firstName");
const lastNameEl = document.querySelector("#lastName");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const iconErrorFNEl = document.querySelector(".icon-error-fn");
const iconErrorLNEl = document.querySelector(".icon-error-ln");
const iconErrorEmailEl = document.querySelector(".icon-error-email");
const iconErrorPasswordEl = document.querySelector(".icon-error-password");
const errorTextFNEl = document.querySelector(".error-first-name");
const errorTextLNEl = document.querySelector(".error-last-name");
const errorTextEmailEl = document.querySelector(".error-email");
const errorTextPasswordEl = document.querySelector(".error-password");
const submitEl = document.querySelector("#submit");



formEl.addEventListener("submit", function(e) {
    e.preventDefault();

    if(!firstNameEl.value.trim()) {
        errorTextFNEl.textContent = "First Name cannot be empty";
        firstNameEl.style.border = "2px solid hsl(0, 100%, 74%)";
        iconErrorFNEl.style.opacity = "1";
    } else {
        errorTextFNEl.textContent = "";
        firstNameEl.style.border = "1px solid var(--greyish-blue)";
        iconErrorFNEl.style.opacity = "0";
    }

    if(!lastNameEl.value.trim()) {
        errorTextLNEl.textContent = "Last Name cannot be empty";
        lastNameEl.style.border = "2px solid hsl(0, 100%, 74%)";
        iconErrorLNEl.style.opacity = "1";
    } else {
        errorTextLNEl.textContent = "";
        lastNameEl.style.border = "1px solid var(--greyish-blue)";
        iconErrorLNEl.style.opacity = "0";
    }

    if(!emailEl.value.trim() || !isValidEmail(emailEl.value)) {
        errorTextEmailEl.textContent = "Looks like this is not an email";
        emailEl.style.border = "2px solid hsl(0, 100%, 74%)";
        iconErrorEmailEl.style.opacity = "1";
    } else {
        errorTextEmailEl.textContent = "";
        emailEl.style.border = "1px solid var(--greyish-blue)";
        iconErrorEmailEl.style.opacity = "0";
    }

    if(!passwordEl.value.trim()) {
        errorTextPasswordEl.textContent = "Password cannot be empty";
        passwordEl.style.border = "2px solid hsl(0, 100%, 74%)";
        iconErrorPasswordEl.style.opacity = "1";
    } else {
        errorTextPasswordEl.textContent = "";
        passwordEl.style.border = "1px solid var(--greyish-blue)";
        iconErrorPasswordEl.style.opacity = "0";
    }

    if(firstNameEl.value.trim() && lastNameEl.value.trim() && emailEl.value.trim() && passwordEl.value.trim()) {
        formEl.reset();
    }
});


function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}