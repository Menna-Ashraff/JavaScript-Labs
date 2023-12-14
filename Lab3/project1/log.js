function validateLogin() {
    
    var username = prompt("Enter your username:");
    var password = prompt("Enter your password:");

    if (username === "admin" && password === "421$$") {
        alert("Welcome Login success");
    }
    else
  { 
    if(username != "admin")
    {
        alert("Incorrect username. Please check your input.");
    }
    if (password != "421$$")
    {
        alert("Incorrect password. Please check your input.");
    }
  }
}

validateLogin();


