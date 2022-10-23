let numberOfCards = Number(prompt("Olá! Com quantas cartas você quer jogar? \n (digite um número PAR de 4 até 14)"))
while(numberOfCards < 4 || numberOfCards > 14 || numberOfCards%2 !== 0)  {
    numberOfCards = Number(prompt("Olá! Com quantas cartas você quer jogar? \n (digite um número PAR de 4 até 14)"))
}





