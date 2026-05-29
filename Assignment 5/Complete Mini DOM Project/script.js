//Task 4: Validate empty fields before submission.
function validateLogin() {
    const fields = [
        document.getElementById("name").value.trim(),
        document.getElementById("classs").value.trim(),
        document.getElementById("city").value.trim(),
        document.getElementById("profilePic").value.trim()
    ];
// Check if any field is empty using for loop
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] === "") {
            alert("Please fill in all fields.");
            return false;
        }
    }
    alert("Student information submitted successfully!");
    return true;
}
//Task 7 (Bonus): Add Dark Mode, Reset Button, and Profile Image Preview.
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
// Reset form fields to default values
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("classs").value = "";
    document.getElementById("city").value = "";
    document.getElementById("profilePic").value = "";
}
// Preview the profile image when the URL is entered
function previewImage() {
    const profilePic = document.getElementById("profilePic").value;
    const preview = document.getElementById("preview");

    if (profilePic !== "") {
        preview.src = profilePic; 
    }else {
        preview.src = ""; 
    }
}
