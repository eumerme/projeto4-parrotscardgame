let popUp = Number(prompt("Com quantas cartas vocês quer jogar?")); //QUANTAS CARTAS
let restriction = (isNaN(popUp) || popUp < 4 || popUp > 14 || (popUp % 2 !== 0)); //RESTRIÇÕES PARA NÃO ENTRAR NO JOGO
let gif = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot","revertitparrot", "tripletsparrot", "unicornparrot"];
    gif = gif.sort(comparador);

// choose number of cards
function numberCards (){
    if (restriction) {
        alert("Você deve escolher um número par de cartas entre 4 e 14.");
    }
    while (restriction) {
        popUp = prompt("Com quantas cartas vocês quer jogar?");
    }

    boardGame();
}
numberCards();

//QUANTIDADE DE CARTAS SELECIONADAS na tela
function boardGame () {
    gif = gif.slice(0, (popUp/2));
    gif = gif.concat(gif);
    
    let deck = document.querySelector(".game-container")
    gif = gif.sort(comparador);
    for (let i = 0; i < popUp; i++){        
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

//VIRAR CARTA ao clicar
function select (elemento) {
    elemento.classList.toggle("flip");   
}

//end of the game
function congrats (){
    const end = document.querySelectorAll(".card.flip");

    if (Number(end.length ) === popUp){
        alert("Você ganhou em X jogadas!"); //DESCOBRIR A QUANTIDADE DE CARTAS VIRADAS
    }
}

//notion
function comparador() { 
	return Math.random() - 0.5; 
}