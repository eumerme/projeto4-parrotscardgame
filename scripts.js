let play= Number(prompt("Com quantas cartas vocês quer jogar?"));

let gif = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot","revertitparrot", "tripletsparrot", "unicornparrot"];
    gif = gif.sort(comparador);

let clicks = 0; //total clicks
let index = 0; //pairs comparison
let match = 0; //pairs match
let card1; //pair one
let card2; //pair two

let counter = 0; //timer
let idInterval = 0;
idInterval = setInterval(timer2, 1000);


//number of cards
function numberCards (){
    if (isNaN(play) || play < 4 || play > 14 || (play % 2 !== 0)) {
        alert("Você deve escolher um número par de 4 a 14.");
    }
    while (isNaN(play) || play < 4 || play > 14 || (play % 2 !== 0)) {
        play= prompt("Com quantas cartas vocês quer jogar?");
    }

    boardGame();
}
numberCards();


//cards distribution
function boardGame () {
    gif = gif.slice(0, (play/2));
    gif = gif.concat(gif);
    
    let deck = document.querySelector(".game-container");
    gif = gif.sort(comparador);
    for (let i = 0; i < play; i++){        
        deck.innerHTML += `
            <div class="card" onclick="select (this);" data-identifier="card">
                <div class="front-face face" data-identifier="back-face" >
                    <img src="./images/front.png" alt="">
                </div>
                <div class="back-face face" data-identifier="front-face">
                    <img src="./images/${gif[i]}.gif" alt="">
                </div>   
             </div>
        `;     
    }

    timer2 ();
}


//cards comparison
function select (element) {        
    clicks += 1;  
    element.classList.add("flip");  

    if (index === 0){
        card1 = element;
        card1.classList.add("clicked-card");
        index++;
        
    } else if (index === 1){
        card2 = element;
        card1.classList.remove("clicked-card");
        
        if(card1.innerHTML === card2.innerHTML){
            card1.classList.add("clicked-card");
            card2.classList.add("clicked-card");
            match += 2;

        } else {
            setTimeout ( () => {card1.classList.remove('flip'); card2.classList.remove('flip')}, 1000);
        }

        index--;
    }    

    if (match === play) {
        setTimeout ( () => {alert(`Parabéns! Você ganhou em ${clicks} jogadas em apenas ${counter} segundos!`); restart ()}, 1000);
    }
}


//timer
function timer2 () {
    counter++;
    document.querySelector(".timer").innerHTML = counter;

    if (match === play) {
      clearInterval(idInterval);
    }
}


//restart game
function restart () {
    let playAgain = prompt("Você gostaria de jogar novamente? Responda 'sim' ou 'não'");
    playAgain = playAgain.toLowerCase();

    if (playAgain === "sim"){
        location.reload();
    } else {
        alert ("Poxa, tudo bem. Quando quiser é só voltar! :P")
    }
} 

//shuffle cards
function comparador() { 
	return Math.random() - 0.5; 
}