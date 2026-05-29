function CHANGETEXT() {
    var textarra = ["this is different", "this is unique", "this is new"];
    var para = document.getElementsByTagName("p");
    
    for (var i = 0; i < para.length; i++) {
        para[i].innerHTML = textarra[i];
        
    }
}