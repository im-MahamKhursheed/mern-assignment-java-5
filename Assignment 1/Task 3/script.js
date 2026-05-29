function CHANGEFONTSIZE(){
    var headings = document.getElementsByTagName("h2");
    for(var i = 0; i < headings.length; i++){
        headings[i].style.fontSize = "30px";
    }
}