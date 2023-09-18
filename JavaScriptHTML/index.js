// var myVar= document.querySelector("#myImageId");
// function myPictire1() {
//     myVar.src = "./Images/image1.jpg";
// }
// function myPicture2() {
//     myVar.src = "./Images/image2.jpg";
// }

// // document.querySelector("#pid").innerHTML = "This is changed";

// // Changing html elements Using DOM
// var link = document.getElementById("google");

// link.innerHTML = "Study with Asa";
// link.style.textDecoration="none";
// link.style.color="green";
// link.href = "https://web.programming-hero.com/web-8/video/web-8-19-8-advanced-looping-through-an-object-and-object-summary";

// // How to create HTML elements

// var heading3 = document.createElement("h1");
// var text = document.createTextNode("This is my third heading");
// heading3.appendChild(text);
// var myDiv = document.getElementById("myDiv");
// myDiv.appendChild(heading3);

// // How to remove element from js

// var heading2 = document.getElementsByTagName("h1")[3];
// myDiv.removeChild(heading2);

// // Add element before another element
var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is my third heading");
heading0.appendChild(text0);
var heading1 = document.getElementsByTagName("h1")[1];
var myDiv = document.getElementById("myDiv");
myDiv.insertBefore(heading0,heading1);


