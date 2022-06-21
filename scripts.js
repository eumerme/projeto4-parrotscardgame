let play = Number(prompt("Com quantas cartas você quer jogar?"));

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
        play = prompt("Com quantas cartas você quer jogar?");
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
}


//cards comparison
function select (element) { 
    timer2 ();       
    clicks += 1;  
    element.classList.add("flip");  

    
    if (index === 0){
        card1 = element;
        card1.classList.add("clicked-card"); 
        index++;
        
    } else if (index === 1){
        card2 = element;
        card2.classList.add("clicked-card"); 

        if(card1.innerHTML === card2.innerHTML){
            card1.classList.add("clicked-card");
            card2.classList.add("clicked-card");
            match += 2; 
            
        } else {
            setTimeout ( () => {card1.classList.remove("flip"); card2.classList.remove("flip")}, 1000);

            setTimeout ( () => {card1.classList.remove("clicked-card"); card2.classList.remove("clicked-card")}, 1000);
        }

        index--;
    }    

    if (match === play) {
        setTimeout ( () => {alert(`Parabéns! Você levou ${counter} segundos para vencer em ${clicks} jogadas!`); restart ()}, 1000);
    }

    console.log(card1, card2, index)
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
    let playAgain = prompt("Gostaria de jogar novamente? Responda 'sim' ou 'não'");
    playAgain = playAgain.toLowerCase();

    if (playAgain === "sim" || playAgain === "s"){
        location.reload();

    } else if (playAgain === "não" || playAgain === "nao" || playAgain === "n") {
        alert ("Poxaaa, mas tudo bem. Quando quiser é só voltar!");
        document.querySelector(".buttons .restart-button").classList.remove("hide");

    } else {
        alert("Como você não respondeu 'sim' ou 'não' especificamente, caso queira jogar novamente aperte o botão 'Restart', caso não queira até a próxima");
        document.querySelector(".buttons .restart-button").classList.remove("hide");
    }    
} 


//restart game button
function restartButton (element){
    location.reload();
    document.querySelector(".buttons .restart-button").classList.add("hide");
}


//shuffle cards
function comparador() { 
	return Math.random() - 0.5; 
}