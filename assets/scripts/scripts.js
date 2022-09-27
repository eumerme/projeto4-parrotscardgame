const message =
	"Com quantas cartas você quer jogar? Escolha um número par entre 4 e 14.";
let deck;
let type = [
	"bobrossparrot",
	"explodyparrot",
	"fiestaparrot",
	"metalparrot",
	"revertitparrot",
	"tripletsparrot",
	"unicornparrot",
];
type = type.sort(shuffleCards);

let clicks = 0;
let match = 0;
let card1, card2;
let timer = 0;
let idTimer;

function renderDeck(matchTypes) {
	let boardGame = document.querySelector(".game-container");

	for (let i = 0; i < deck; i++) {
		let cardTemplate = `
            <div class="card" onclick="selectCard (this);">
                <div class="front-face">
                    <img src="./images/front.png" alt="">
                </div>
                <div class="back-face front-face">
                    <img src="./images/${matchTypes[i]}.gif" alt="">
                </div>   
             </div>
        `;

		boardGame.innerHTML += cardTemplate;
	}
}

function startGame() {
	const half = type.slice(0, deck / 2);
	const double = half.concat(half);
	const shuffleMatchTypes = double.sort(shuffleCards);

	renderDeck(shuffleMatchTypes);
}

function invalidGame() {
	if (isNaN(deck) || deck < 4 || deck > 14 || deck % 2 !== 0) {
		return true;
	}
	return false;
}

function howManyCards() {
	deck = Number(prompt(message));

	while (invalidGame()) {
		deck = Number(prompt(message));
	}

	startGame();
}

function compareCards(card1, card2) {
	if (card1.innerHTML === card2.innerHTML) {
		match += 2;
		resetCards();
		verifyEndGame();
	} else {
		setTimeout(untapCards, 1000);
	}
}

function selectCard(element) {
	if (idTimer === undefined) {
		idTimer = setInterval(setTimer, 1000);
	}

	if (element.classList.contains("flip")) return;

	if (card1 && card2) return;

	element.classList.add("flip");
	clicks++;

	if (!card1) {
		card1 = element;
	} else if (!card2) {
		card2 = element;

		compareCards(card1, card2);
	}
}

function untapCards() {
	card1.classList.remove("flip");
	card2.classList.remove("flip");

	resetCards();
}

function resetCards() {
	card1 = undefined;
	card2 = undefined;
}

function setTimer() {
	timer++;
	document.querySelector(".timer").innerHTML = timer;
}

function endGame() {
	alert(
		`Parabéns! Você levou ${timer} segundos para vencer em ${
			clicks / 2
		} jogadas!`
	);
	restart();
}

function verifyEndGame() {
	if (match === deck) {
		setTimeout(endGame, 1200);
		clearInterval(idTimer);
	}
}

function restart() {
	const playAgain = confirm("Gostaria de jogar novamente?");

	if (playAgain) {
		window.location.reload();
	} else {
		document.querySelector(".buttons .restart-button").classList.remove("hide");
	}
}

function restartButton() {
	window.location.reload();
	document.querySelector(".buttons .restart-button").classList.add("hide");
}

function shuffleCards() {
	return Math.random() - 0.5;
}

howManyCards();
