//alert("hello");// this will give pop up of hello
// document.querySelector searches for the first element in the document that matches the selector and returns it as an object.
//.addEventListener("click",handleClick);   DOM element
//.addEventListener register event handlers to respond to specific events on an element.
// "click"  listener will be triggered when the selected element is clicked
// handleClick function will be executed when click happen
//handleClick() if we will use this then pop up will come even before clicking W
// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick() {
//     alert("I got clicked!");
// target all element having selector of .drum   drum is class that we r targeting
//change this so that all buttons when clicked give alert message.
 //number of elements in the document that have the class "drum" applied to them.
//  In this case, the selector is ".drum", which targets elements with the class "drum".
// alert("I got clicked!");
// var audio = new Audio('sounds/tom-1.mp3');
// //new variable created new object Audio and with this new object we r calling sound
// audio.play();

//this is identity of the buttons that triggered the listener
// console.log(this.innerHTML);
// this.style.color = "yellow";  // whenever we will click letter present in that button will change it's colour from red to white.
// console.log(this); whenerver we click this select that object
// });
// $0.addEventListener("click",function);
// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length; 
for(var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
//detecting keyboard press
    document.addEventListener("keypress", function(event){
        //addEventListener is higher order function as it take function(event) as input
        // function that is passed in this is called call back function.
     makeSound(event.key);
     buttonAnimation(event.key);
    });
    // Inside the keypress event listener function, this line calls the makeSound function and passes the event.key as an argument.
    // The event.key represents the key that was pressed, and 
    //the makeSound function plays the corresponding drum sound based on the provided key.
    function makeSound(key){
        switch (key) {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "s":
                var audio3 = new Audio('sounds/tom-2.mp3');
                audio3.play();
                break;
            case "d":
                var audio4 = new Audio('sounds/kick-bass.mp3');
                audio4.play();
                break;
            case "j":
                var audio5 = new Audio('sounds/tom-3.mp3');
                audio5.play();
                break;
            case "k":
                var audio6 = new Audio('sounds/crash.mp3');
                audio6.play();
                break;
            case "l":
                var audio7 = new Audio('sounds/tom-4.mp3');
                audio7.play();
                break;
            default:
                console.log(buttonInnerHTML);
        }
    }
    function buttonAnimation(currentkey){
      var activeButton = document.querySelector("." + currentkey);
      activeButton.classList.add("pressed");
      setTimeout(function(){
        activeButton.classList.remove("pressed");
      },110);
    }







