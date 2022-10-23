
let numberOfCards = ""
//criar lista de backImages
listBackImages = ["back-01","back-02", "back-03","back-04","back-05","back-06","back-07"]
//lista embaralhada
const sortedImages = listBackImages.sort(comparador)
//pegar container de cartas
let cardsContainer = document.querySelector('.cards-container')

numberOfCards = Number(prompt("Olá! Com quantas cartas você quer jogar? \n (digite um número PAR de 4 até 14)"))
while(numberOfCards < 4 || numberOfCards > 14 || numberOfCards%2 !== 0)  {
    numberOfCards = Number(prompt("Olá! Com quantas cartas você quer jogar? \n (digite um número PAR de 4 até 14)"))
}

let sortedHalf = numberOfCards / 2

for(let i = 0; i < sortedHalf; i++) {
    cardsContainer.innerHTML += 
    `<div class="game-card">
        <div class="game-card__inside" onclick="flip(this)">      
            <div class="game-card__side game-card__side-front">
                <img src="/images/parrot.png" alt="" class="parrot-image">
            </div>
            <div class="game-card__side game-card__side-back">
                <p>${sortedImages[i]}</p>
            </div>
        </div>
    </div>`
}



/*
const listOfCards = []

*/
// dividir o numero de cartas por 2

// embaralhar cartas
function comparador() { 
	return Math.random() - 0.5; 
}
// guardar metade do numero de cartas solicitadas 
// 
// embaralhar 


