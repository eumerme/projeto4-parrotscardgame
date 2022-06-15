// choose number of cards
let popUp = Number(prompt("Com quantas cartas vocês quer jogar?"));

function numberCards (){
       
    if (isNaN(popUp)) {
        alert("Você deve escolher um número par de cartas entre 4 e 14.");
    }

    while (isNaN(popUp) || popUp < 4 || popUp > 14 || (popUp % 2 !== 0)) {
        popUp = prompt("Com quantas cartas vocês quer jogar?");
    }

    const deckArray = [];
    let i = 0;

    while(i < popUp){
        deckArray.push(`<div class="card"><img src="./images/front.png" alt=""></div>`);
        console.log(deckArray[i]);
        i++;
    }

    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.innerHTML = deckArray;
}
numberCards();
