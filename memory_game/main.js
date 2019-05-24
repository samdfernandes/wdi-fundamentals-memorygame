var cards = [{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}];

var cardsInPlay = [];

//on first 2 cards played, this checks for a match
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("sorry, try again.");
		
	}
}


function checkIfWon(){
	if (cardsInPlay[2] === cardsInPlay[3]){
		alert("You Won!!");
	} else {
		alert("sorry, you lost this match. Click \"RESET GAME\" to try again");
	}
}

function flipCard(){
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	
	if(cardsInPlay.length === 2) {

	setTimeout(checkForMatch, 1000);
}

	if(cardsInPlay.length === 4) {

	setTimeout(checkIfWon, 1000);
} 

}

function createBoard(){
	for (var i = 0 ;i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement)
	}
}

function reload(){
	location.reload(true);
}

createBoard();

var button = document.querySelector('button')
button.addEventListener('click',reload)
