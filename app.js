function togglePassword() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform login logic here (e.g., send data to server and handle authentication)
    // For demonstration purposes, we'll just log the entered credentials
    console.log("Username: " + username);
    console.log("Password: " + password);
}