let gameCards = Number(prompt("Com quantas cartas vocês quer jogar?"));
let gif = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot","revertitparrot", "tripletsparrot", "unicornparrot"];
    gif = gif.sort(comparador);
let clicks = 0; //total clicks
let index = 0; //pairs comparison
let match = 0; //pairs match
let card1; //pair one
let card2; //pair two


//number of cards
function numberCards (){
    if (isNaN(gameCards) || gameCards < 4 || gameCards > 14 || (gameCards % 2 !== 0)) {
        alert("Você deve escolher um número par de 4 a 14.");
    }
    while (isNaN(gameCards) || gameCards < 4 || gameCards > 14 || (gameCards % 2 !== 0)) {
        gameCards = prompt("Com quantas cartas vocês quer jogar?");
    }

    boardGame();
}
numberCards();


//cards distribution
function boardGame () {
    gif = gif.slice(0, (gameCards/2));
    gif = gif.concat(gif);
    
    let deck = document.querySelector(".game-container");
    gif = gif.sort(comparador);
    for (let i = 0; i < gameCards; i++){        
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

    if (match === gameCards) {
        setTimeout ( () => {alert(`Você ganhou em ${clicks} jogadas!`); card2.classList.remove('flip')}, 1000);
    }
}

//shuffle cards
function comparador() { 
	return Math.random() - 0.5; 
}