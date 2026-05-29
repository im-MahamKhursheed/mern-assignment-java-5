function validateLogin() {
    const fields = [
        document.getElementById("name").value.trim(),
        document.getElementById("classs").value.trim(),
        document.getElementById("city").value.trim(),
        document.getElementById("profilePic").value.trim()
    ];

    for (let i = 0; i < fields.length; i++) {
        if (fields[i] === "") {
            alert("Please fill in all fields.");
            return false;
        }
    }
    alert("Student information submitted successfully!");
    return true;
}

function DarkMode() {
    if(document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("classs").value = "";
    document.getElementById("city").value = "";
    document.getElementById("profilePic").value = "";
}
function previewImage() {
    const profilePic = document.getElementById("profilePic").value;
    const preview = document.getElementById("preview");

    if (profilePic !== "") {
        preview.src = profilePic; 
    }else {
        preview.src = ""; 
    }
}
