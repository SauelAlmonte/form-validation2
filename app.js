// Registration Form
const form = document.getElementById('registration-form')

//Username
const username = document.getElementById('username')
// const usernameErr = username.nextElementSibling

// Email
const email = document.getElementById('email')
// const emailErr = username.nextElementSibling

// Password
const password = document.getElementById('password')
// const emailErr = username.nextElementSibling

// Email
const password2 = document.getElementById('password2')
// const emailErr = username.nextElementSibling

form.addEventListener( 'click', function (e){
    e.preventDefault()
    validateEmpty(username)
    validateEmpty(email)
    validateEmpty(password, password2)

})

function validateEmpty(input){
    console.log(input)
    if (input.value === '') {
        showError(input)
    } else {
        showSuccess(input)
    }
}

// Show a message with error
function showError(input) {
    console.log("Username is Empty")
}

// function showError(input){
//     input.addEventListener('blur', function(e) {
//         e.preventDefault()
//         console.log("Input Empty")
//         if(input.value === '') {
//             e.target.nextElementSibling.innerHTML = '<small class="error">✗ Input Empty</small>'
//         }
//     })
// }

// Show a message with success

function showSuccess(input) {
    console.log('You are ready to submit...')
}

// function showSuccess(input){
//     input.addEventListener('blur', function (e){
//         console.log('You are ready to submit')
//         if(input.value !== '') {
//             e.target.nextElementSibling.innerHTML = '<small class="success"> ✔ complete</small>'
//         }
//     })
// }