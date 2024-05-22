
const gameBoard = document.getElementById('gameBoard')

const cardsArray = [
	'A', 'A', 'B', 'B',
	'C', 'C', 'D', 'D',
	'E', 'E', 'F', 'F',
	'G', 'G', 'H', 'H'
	];

cardsArray.sort(function() {return 0.5 - Math.random()})

for (cardValue of cardsArray) {
	gameBoard.appendChild(createCard(cardValue))
}

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function createCard(cardValue) {
	const card = document.createElement('div');
	card.classList.add('card');
	card.dataset.value = cardValue;
	card.textContent = ""; //card.dataset.value;	
	card.addEventListener('click', flipCard);
	return card;
}

function flipCard() {
	if (lockBoard) return; // 클릭을 막은 상태
	if (this == firstCard) return; // 이미 선택된 카드를 선택

	//this.textContent = this.dataset.value;
	let value = this.dataset.value;
	let imgTag = `<img src=./${value}.jpg width=150>`;
	this.innerHTML = imgTag;
	
	this.classList.add('flipped');

	if (!firstCard) {
		firstCard = this;
		return;
	}
	secondCard = this;
	lockBoard = true;
	checkMatch();
}

function checkMatch() {
	// 첫 카드와 두번째 카드가 일치하는가?
	if (firstCard.dataset.value == secondCard.dataset.value) {
		firstCard.classList.add('matched');
		secondCard.classList.add('matched');
		resetBoard();
	}
	else {
		setTimeout( 
			function() {
				firstCard.textContent = "";
				secondCard.textContent = "";
				firstCard.classList.remove('flipped');
				secondCard.classList.remove('flipped');
				resetBoard();				
			}, 500);
	}

}

function resetBoard() {
	firstCard = null;
	secondCard = null;
	lockBoard = false;
}
