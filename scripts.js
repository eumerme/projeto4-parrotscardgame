let popUp = Number(prompt("Com quantas cartas vocês quer jogar?")); //QUANTAS CARTAS
let restriction = (isNaN(popUp) || popUp < 4 || popUp > 14 || (popUp % 2 !== 0)); //RESTRIÇÕES PARA NÃO ENTRAR NO JOGO

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
    document.querySelector(".game-container").innerHTML = ""

    for (let i = 0; i < popUp; i++){
        const allCards = `
            <div class="card-container" onclick="select (this);">
                <div class="front-face card">
                    <img src="./images/front.png" alt="">
                </div>
                <div class="back-face card">
                    <img src="./images/bobrossparrot.gif" alt="">
                </div>   
             </div>
            `;
        document.querySelector(".game-container").innerHTML += allCards;
    }
}

//VIRAR CARTA ao clicar
function select (elemento) {
    elemento.classList.toggle("flip");   
}