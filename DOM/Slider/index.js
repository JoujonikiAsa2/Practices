var photos = ["images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpeg"];
var imgTag = document.querySelector('img');
var count = 0;
function next(){
    count ++;
    if(count>= photos.length){
        count = 0;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}
function previous(){
    count --;
    if(count < 0){
        count = photos.length-1;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}