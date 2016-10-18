//declare array holding all four cards
var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

function createBoard(){
	//get the game board to append the cards
	board = document.getElementById('game-board');
	console.log(board);

	//loop through the length of cards for the set up
	for(i = 0; i < cards.length; i++){

		//create the element as a div
		var cardElement = document.createElement('div');

		//provide a class name to the created element
		cardElement.className = 'card';

		//provide it some metadata so we know which one it is
		cardElement.setAttribute('data-card', cards[i]);

		//add event listener to execute isTwoCards on click
		cardElement.addEventListener('click', isTwoCards);

		//slap the card onto the board
		board.appendChild(cardElement);
	}
	
	//just verifying creation
	card_check = document.querySelectorAll('.card');
	console.log(card_check);
}

function isTwoCards(){
	//push the king or queen value into the array
	cardsInPlay.push(this.getAttribute('data-card'));

	//check to see which it is and show the png of corresponding item
	if(this.getAttribute('data-card') === 'queen'){
		
		this.innerHTML = "<img src='queen.png'>";
	
	} else {
		
		this.innerHTML = "<img src='king.png'>";
	}

	if(cardsInPlay.length === 2){
		
		//see if they are the same string value
		isMatch(cardsInPlay);

		//reset the array for the nxt round 
		cardsInPlay = [];
	}
}

function isMatch(){
	
	if(cardsInPlay[0] === cardsInPlay[1]){
		
		alert("You found a match!");
		//give me a second to view the second card before you wipe it
		setTimeout(clear, 1000);

	} else {
		
		alert("Sorry, try again.");
		setTimeout(clear, 1000);
	}
}

//added this function to clear the inner HTML of the cards, thus removing the images from view
function clear(){
	zero = document.getElementsByClassName('card');
	for (i = 0; i < cards.length; i++){
		zero[i].innerHTML = '';
	}
}

createBoard();