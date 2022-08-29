// Registration Form
const form = document.getElementById('registration-form')

//Username
const username = document.getElementById('username')
// const usernameErr = username.nextElementSibling

// //Email
// const email = document.getElementById('email')
// const emailErr = email.nextElementSibling
//
// //Password
// const password = document.getElementById('password')
// const passwordErr = password.nextElementSibling
//
// //Password 2
// const password2 = document.getElementById('password2')
// const password2Err = password2.nextElementSibling

form.addEventListener('submit', function(e){
    e.preventDefault()
    showError()

})

// function validateEmpty (input) {
//     console.log(input)
//     if (input.value === '') {
//         showError(input)
//     } else {
//         showSuccess(input)
//     }
// }

// Show a message with error
function showError(){
    console.log("Form Submitted....")
    if (username.value === '') {
       console.log("Username is Empty")
    }
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

function showSuccess(){

}

// function showSuccess(input){
//     input.addEventListener('blur', function (e){
//         console.log('You are ready to submit')
//         if(input.value !== '') {
//             e.target.nextElementSibling.innerHTML = '<small class="success"> ✔ complete</small>'
//         }
//     })
// }