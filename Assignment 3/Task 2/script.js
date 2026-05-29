function checkPassword(){
    var password = document.getElementById("password").value;
    if(password.length < 8){
        alert("Weak password! Password must be at least 8 characters long.");
    }
    else{
        alert("Strong password!");
    }
}