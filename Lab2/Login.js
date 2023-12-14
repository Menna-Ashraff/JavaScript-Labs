
    function validateLogin(event) {
        event.preventDefault();

        // Get input values
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Check username and password
        if (username === "admin" && password === "421$$") {
            alert("Welcome! Login success");
        } else {
            alert("Incorrect username or password. Please check your input.");
        }
    }


    