let popUp = Number(prompt("Com quantas cartas vocês quer jogar?")); 
let gif = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot","revertitparrot", "tripletsparrot", "unicornparrot"];
    gif = gif.sort(comparador);

// choose number of cards
function numberCards (){
    if (isNaN(popUp) || popUp < 4 || popUp > 14 || (popUp % 2 !== 0)) {
        alert("Você deve escolher um número par entre 4 e 14.");
    }
    while (isNaN(popUp) || popUp < 4 || popUp > 14 || (popUp % 2 !== 0)) {
        popUp = prompt("Com quantas cartas vocês quer jogar?");
    }

    boardGame();
}
numberCards();

//selected cards
function boardGame () {
    gif = gif.slice(0, (popUp/2));
    gif = gif.concat(gif);
    
    let deck = document.querySelector(".game-container");
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

//flip card
function select (elemento) {
    elemento.classList.toggle("flip");   
}

//notion
function comparador() { 
	return Math.random() - 0.5; 
}