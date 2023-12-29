const loginForm = document.getElementById("login-form")
const loginButton = document.getElementById("login_button")
const loginErrorMsg = document.getElementById("errormsg")

loginForm.addEventListener("submit", function(e) 
{
    e.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value

  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    if (!email || !password) 
    {
        loginErrorMsg.innerText = "Please fill in both email and password fields."
        loginErrorMsg.style.opacity = 1
    } else if (!passwordRegex.test(password)) 
    {
        loginErrorMsg.innerText = "Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long."
        loginErrorMsg.style.opacity = 1
    } 
    else 
    {
        alert("Welcome")
    }
})


function myFunc(){
    window.location = "scc.html"
} 

function myFunc(){
    window.location = "users.html"
} 

