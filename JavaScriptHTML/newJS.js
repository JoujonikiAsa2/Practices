var heading1 = document.getElementsByTagName("h1")[0];
heading1.innerHTML = "Say hello";
// Creating html element
var heading2 = document.createElement("h1");
// Creating text for the element
var text = document.createTextNode("Hi Asa");
// append the text into the element
heading2.appendChild(text);

// Finding the div where the element to insert
var myDiv  = document.getElementById("myDiv");
// append the element to that place
myDiv.appendChild(heading2);

var heading3 =  document.createElement("h1");
var text2 = document.createTextNode("This is heading 3");
heading3.appendChild(text2);
var heading0 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading3,heading0);

// Remove element
var heading4 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading4);

// ************************************************
//                 DOM Traversing and Manipulating

