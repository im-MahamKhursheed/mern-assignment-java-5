function changeImage(){
    let image = document.getElementsByTagName('img');
    for(let i=0; i<image.length; i++){
        if(image[i].src.match("image1")){
            image[i].src = "image2.jpg";
        } else {
            image[i].src = "image1.jpg";
        }       
    }
}