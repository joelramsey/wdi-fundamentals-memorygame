//declare four variables representing the four cards (two sets of matches)
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

//initial conditional checks

//queens match followed by kings match folled by no match message
// if(cardOne === cardTwo){
// 	alert("You found a match!");
// } else if(cardThree === cardFour){
// 	alert("You found a match!");
// } else {
// 	alert("Sorry, try again.");
// }



function createCards(){
	//get the game board to append the cards
	board = document.getElementById('game-board');
	console.log(board);

	//append the cards to the gameboard
	for(i = 0; i < 4; i++){
		var card = document.createElement('div');
		card.className = 'card';
		board.appendChild(card);
	}
	//just verifying creation
	card_check = document.querySelectorAll('.card');
	console.log(card_check);
}

createCards();