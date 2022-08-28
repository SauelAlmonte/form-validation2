// Registration Form
const form = document.getElementById('registration-form')

//Username
const username = document.getElementById("username")
const usernameErr = username.nextElementSibling

//Email
const email = document.getElementById('email')
const emailErr = email.nextElementSibling

//Password
const password = document.getElementById('password')
const passwordErr = password.nextElementSibling

//Password 2
const password2 = document.getElementById('password2')
const password2Err = password2.nextElementSibling

form.addEventListener('click', function(e){
    e.preventDefault()

    validateEmpty(username)
    showError(usernameErr)
    showSuccess(username)
    validateEmpty(email)
    showError(emailErr)
    showSuccess(email)
    validateEmpty(password)
    showError(passwordErr)
    showSuccess(password)
    validateEmpty(password2)
    showError(password2Err)
    showSuccess(password2)


//     // Username
//     if (username.value === ""){
//         usernameErr.innerHTML = '<small class="error">✗ Please Enter Username</small>' // in browser
//     } else{
//         console.log("Thank you, ", username.value)
//     }
//
// // Email
//     if (email.value === ""){
//         emailErr.innerHTML = '<small class="error">✗ Please Enter Email</small>' // in browser
//     } else{
//         console.log("Thank you, ", email.value)
//     }
//
// // Password
//     if (password.value === ""){
//         passwordErr.innerHTML = '<small class="error">✗ Please Enter Password</small>' // in browser
//     } else{
//         console.log("Thank you, ", password.value)
//     }
//
// // Password 2
//     if (password2.value === ""){
//         password2Err.innerHTML = '<small class="error">✗ Please Confirm Password</small>' // in browser
//     } else{
//         console.log("Thank you, ", password2.value)
//     }
})

function validateEmpty (input) {
    console.log(input)
    if (input.value === '') {
        showError(input)
    } else {
        showSuccess(input)
    }
}

// Show a message with error
function showError(input){
    input.addEventListener('blur', function(e) {
        e.preventDefault()
        console.log("Input Empty")
        if(input.value === '') {
            e.target.nextElementSibling.innerHTML = '<small class="error">✗ Input Empty</small>'
        }
    })
}

// Show a message with success

function showSuccess(input){
    input.addEventListener('blur', function (e){
        console.log('You are ready to submit')
        if(input.value !== '') {
            e.target.nextElementSibling.innerHTML = '<small class="success"> ✔ complete</small>'
        }
    })
}