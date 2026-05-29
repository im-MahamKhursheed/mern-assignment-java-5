function generateTable() {
    var number = document.getElementById("numberInput").value;
    document.getElementById("result").innerHTML="";
    for (var i = 1; i <= 10; i++) {
        document.getElementById("result").innerHTML += number + " x " + i + " = " + (number * i) + "<br>";
    }
}