
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
	let imgTag = `<img src=./${value}.jpg width=100>`;
	this.innerHTML = imgTag;
	
	this.classList.add('flipped');
	addMsg(this.dataset.value);

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
		removeMsg(secondCard.dataset.value);
		addMsg(secondCard.dataset.value);
		resetBoard();
	}
	else {
		setTimeout( 
			function() {
				firstCard.textContent = "";
				secondCard.textContent = "";
				firstCard.classList.remove('flipped');
				secondCard.classList.remove('flipped');
				removeMsg(firstCard.dataset.value);
				removeMsg(secondCard.dataset.value);
				resetBoard();				
			}, 500);
	}

}

function resetBoard() {
	firstCard = null;
	secondCard = null;
	lockBoard = false;
}

function addMsg(value) {
	msgBoard = document.getElementById('msgBoard');
	const msg = document.createElement('p');
	msg.classList.add(value);
	msg.innerHTML = setMsg(value);	
	msgBoard.appendChild(msg)
	
}

function removeMsg(value) {
	msgs = document.getElementsByClassName(value);
	const msgArray = Array.from(msgs);
	for (msg of msgArray) {
		parent = msg.parentElement;
		parent.removeChild(msg);
	}

}

function setMsg(value) {
	if (value == 'A') {
		return '4년제 대학 최초의 게임교육을 실시한 동명대학교, 그 20년 게임교육 전통이 살아 있는 동명대학교 게임학부';
	}
	if (value == 'B') {
		return '산학실용교육의 명문으로서 지역사회의 발전과 함께 한 동명대학교 - 그 핵심 인재를 양성하는 게임학부';
	}
	if (value == 'C') {
		return '모든 교육과정이 현장 실무 전문가와의 협력을 통해 실무 중심으로 설계되고 개선되는 실용 교육';
	}
	if (value == 'D') {
		return '무엇이든 상상하고 실현할 수 있는 창의적 성장을 지원하는 교육목표와 모듈형 교육체계';
	}
	if (value == 'E') {
		return 'G-Star 전시, 동명 게임 챌린지를 통해 학생의 꿈이 실현되고 확산될 수 있도록 지원하는 적극적인 외부활동';		
	}
	if (value == 'F') {
		return '국민게임 애니팡을 만든 선배부터 펄어비스, 넥슨 등의 다양한 진로로 진출한 선배들이 이끌어주는 학과 전통';
	}
	if (value == 'G') {
		return '대한민국 최초의 정보통신특성화 4년제 대학으로 시작한 동명의 DNA가 흐르는 교육환경';
	}
	if (value == 'H') {
		return '무엇이든 실천할 수 있는 자기가 설계하는 Do-ing 교육 실현으로 나만의 공부, 체험, 도전이 가능한 동명 캠퍼스';
	}
}
