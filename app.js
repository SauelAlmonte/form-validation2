// Registration Form
const form = document.getElementById('registration-form')

form.addEventListener( 'submit', function (e){
    e.preventDefault()
    validateEmpty(username)
    validateEmpty(email)
    validateEmpty(password)
    validateEmpty(password2)
    validatePassMatch(password,password2)
    validateIsEmail(email)
    validateEmail(email)
    validateMinLength(password, password2)
})

//Username
const username = document.getElementById('username')
// const usernameErr = username.nextElementSibling

// Email
const email = document.getElementById('email')
// const emailErr = username.nextElementSibling

// Password
const password = document.getElementById('password')
// const emailErr = username.nextElementSibling

// Password2
const password2 = document.getElementById('password2')
// const emailErr = username.nextElementSibling


// Validating if empty
function validateEmpty(input) {
    console.log(input.value)
    // declaration
    const inputName = input.name
    //for empty value
    if (input.value ==='') {
        //functions for error or success
        showError(input,`${inputName} is Empty!`)
    } else {
        showSuccess(input,`${inputName} is Valid!`)
    }
}

// Show message with error
function showError(input, msg){
    // uses styling from tailwind.css file
    input.nextElementSibling.innerHTML = `<small class="error">${msg}</small>`
}

// Show message with success
function showSuccess(input,msg) {
    input.nextElementSibling.innerHTML =`<small class="success">${msg}</small>`
}

// Validate email
function validateEmail (email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)){
        return (true)
    } else {
        return (false)
    }
}

// Validate it is an email
function validateIsEmail (email) {
    if (validateEmail(email)===true) { // return true
        showSuccess(email,'Email is Valid')
    } else {
        showError(email, 'Email is Invalid')
    }
}

// Validate Password Match
function validatePassMatch (password, password2) {
    if (password.value===password2.value && password.value!==''){
        showSuccess(password2,`${password.name} matches ${password2.name}`)
    } else {
        showError(password2,'Not a match! Please re-enter the password')
    }
}

// Minimum Length
function validateMinLength (input) {
    console.log(input.value.length)
    const inputName = input.name
    if (input.value.length < 6 && input.value===password.value){
        showError(input, `${inputName} Too short`)
    } else {
        showSuccess(input,`${inputName} Valid`)
    }
}


