// document.getElementById("my-form")
// console.log("username: ")

// Example

// const myUsername = "username"
// console.log(myUsername)

// Use

// username

// Step 1 Get DOM element

//Username
const regForm = document.getElementById('registration-form')

const username = document.getElementById("username")
const usernameErr = username.nextElementSibling

showError(username)
showError(document.getElementById("email"))
showError(document.getElementById("password"))
showError(document.getElementById("password2"))

function showError(inputElement){
    inputElement.addEventListener('blur', function (e){
        if(inputElement.value !== '') {
            e.target.nextElementSibling.innerHTML = '<small class="success">✔ complete</small>'
        }
    })
}

//Email
const email = document.getElementById('email')
const emailErr = email.nextElementSibling

//Password
const password = document.getElementById('password')
const passwordErr = password.nextElementSibling

//Password 2
const password2 = document.getElementById('password2')
const password2Err = password2.nextElementSibling

// Step 2 add event / modification

regForm.addEventListener('click', function(e){
    e.preventDefault()

// const usernameValue = username.value

// Step 3 Check if the value is empty

    // Username
    if (username.value === ""){
// Step 4 If empty Give feedback
        usernameErr.innerHTML = '<small class="error">✗ Please Enter Username</small>' // in browser
//         console.log("Please enter username")
    } else{
        console.log("Thank you, ", username.value)
    }

    // Email
    if (email.value === ""){
// Step 4 If empty Give feedback
        emailErr.innerHTML = '<small class="error">✗ Please Enter Email</small>' // in browser
//         console.log("Please enter username")
    } else{
        console.log("Thank you, ", email.value)
    }

    // Password
    if (password.value === ""){
// Step 4 If empty Give feedback
        passwordErr.innerHTML = '<small class="error">✗ Please Enter Password</small>' // in browser
//         console.log("Please enter username")
    } else{
        console.log("Thank you, ", password.value)
    }

    // Password 2
    if (password2.value === ""){
// Step 4 If empty Give feedback
        password2Err.innerHTML = '<small class="error">✗ Please Confirm Password</small>' // in browser
//         console.log("Please enter username")
    } else{
        console.log("Thank you, ", password2.value)
    }
})

// Step 4 other, it's ok


// Step 5 Give feedback when we register

// Step 3 If empty Give feedback
// A conditional step is required
// A conditional step is required
// example
// if(what to check){
//     what should happen
// }
// Conditionals
// if(usernameValue === ""){
//     // What should happen
//     console.log("Please enter your username!")
//     //Another function called
//     // alert("Please enter your username!")
// //     Alternative to If
// } else {
//     console.log(usernameValue)
// }




// username.value

// Browser examples:
// const todaysDate = prompt("What's today ?")
// alert(todaysDate)
// Email
// const email = document.getElementById("email")
// console.log(email)
//
// //Password
// const password = document.getElementById("password")
// console.log(password)
//
// // Password Confirm
// const password2 = document.getElementById("password-2")
// console.log(password2)

// Steps
// 1. Grab the DOM section
// 2. Check if the value is empty
// 3. If empty, give user some feedback
// 4. Other, it's ok.

// Different Method

// Variable called "username"
// const username = document.getElementById("username")

// console.log(document.getElementById("username"))
// Same
// console.log(
//     document.getElementById("username")
// )

//Email
// console.log("email: ")
// console.log(document.getElementById("email"))
//
// //Password
// console.log("password: ")
// console.log(document.getElementById("password"))
//
// console.log("confirm password: ")
// console.log(document.getElementById("password-2"))