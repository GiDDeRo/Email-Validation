const submitBtn = document.getElementById("submit");
const submitError = document.getElementById("submitError");
const fullName = document.getElementById("fullName");
const fullNameError = document.getElementById("fullNameError");
const phone = document.getElementById("phoneNo");
const phoneError = document.getElementById("phoneError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const msg = document.getElementById("message");
const msgError = document.getElementById("msgError");



function checkFullName () {
    const input = fullName.value
    fullNameError.innerHTML = 'Input your full name';
    fullNameError.removeChild

    if(input.length == 0) {
        fullNameError.style.display = "block";
        return false;
    } else if (!input.match(/^([A-Z][a-z]+)\s+([A-Z][a-z]+)$/)) {
        fullNameError.style.display = "block";
        return false;
    } else {
        fullNameError.innerHTML = '<i class="far fa-check-circle"></i>';
        fullNameError.style.display = "block";
        return true;
    }
}

function checkPhoneNo () {
    const input = phone.value;
    phoneError.innerHTML = 'Input your phone no';
    phoneError.removeChild

    if(input.length == 0) {
        phoneError.style.display = "block";
        return false;
    } else if (input.length !== 11) {
        phoneError.innerHTML = 'Invalid phone number';
        return false;
    } else {
        phoneError.innerHTML = '<i class="far fa-check-circle"></i>';
        phoneError.style.display = "block";
        return true;
    }
}

function checkEmail () {
    const input = email.value;
    emailError.style.display = "block";
    emailError.innerHTML = 'Input your email';
    emailError.removeChild

    if(input.length == 0) {
        emailError.style.display = "block";
        return false;
    } else if (!input.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailError.innerHTML = 'Invalid phone number';
        return false;
    } else {
        emailError.innerHTML = '<i class="far fa-check-circle"></i>';
        emailError.style.display = "block";
        return true;
    }
}

function checkMessage() {
    const input = msg.value;
    msgError.innerHTML = 'Write a message!';
    msgError.removeChild

    if(input.length == 0) {
        msgError.style.display = "block";
        return false;
    } else if(input.length < 30) {
        msgError.innerHTML = 'Add More!';
        return false;
    } else {
        msgError.innerHTML = '<i class="far fa-check-circle"></i>';
        msgError.style.display = "block";
        return true;
    }
}


submitBtn.addEventListener("click", e=> {
    checkFullName();
    checkPhoneNo();
    checkEmail();
    checkMessage();

    if(!checkFullName() || !checkPhoneNo() || !checkEmail() || !checkMessage()) {
        submitError.style.display = "block";
        setInterval(()=> {
            submitError.style.display = "none";
        }, 3000)
    }
})