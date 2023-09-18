// var myVar = document.querySelector("h1");
// myVar.addEventListener("mouseover", function(){
//     myVar.classList.add("my-style");
// });
// var myVar = document.querySelector("h1");
// myVar.addEventListener("mouseout", function(){
//     myVar.classList.remove("my-style");
// });

// // var myVar = document.querySelector("h1");

// // myVar.addEventListener("click", function(){
// //     
// // });

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const makeBlueButton = document.getElementById('blueButton');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// we will use this some times
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'; document.body.style.backgroundColor = 'purple';
}

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
};

const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});

