const usernames = ["admin", "user1", "user2", "user3", "maham"];
const passwords = ["password123", "pass456", "pass789", "pass000", "123456"];

    function validateLogin() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "" || password === "") {
            alert("Please fill in all fields.");
            return false; 
        }

        for (let i = 0; i < usernames.length; i++) {
            if (username === usernames[i] && password === passwords[i]) {
                alert("Login successful!");
                return true; 
            }
        }

        alert("Invalid username or password. Please try again.");
        return false; 
        }