//declare four variables representing the four cards (two sets of matches)
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

//initial conditional checks

//queens match followed by kings match folled by no match message
if(cardOne === cardTwo){
	alert("You found a match!");
} else if(cardThree === cardFour){
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}