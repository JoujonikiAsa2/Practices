// IIFEs (Immediately Invokeable Function Expression)

// For immediate call amader k () use korte hobe then bairer dike () use korte hobe

// (function display(message){
//     console.log(message);
// })("hello");

(function sum(a,b){
    console.log(a+b);
})(10,23);

// Function Expression
// store function value in a variable
var display = function displayMessage(){
    console.log("Hi, I am Asa");
};

display()

// (), {}, [], <>