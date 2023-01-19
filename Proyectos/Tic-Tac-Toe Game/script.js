const jugadorX = 'x';
const jugadorO = 'circle'

const winCondition = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]

const elementosCelda = document.querySelectorAll('[data-cell]');
const elementosTablero = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.getElementById('winningMessageText');

let isPlayer_0_Turn = false;

iniciarJuego();

restartButton.addEventListener('click',iniciarJuego)

function iniciarJuego(){
    isPlayer_0_Turn = false;
    elementosCelda.forEach(celda =>{
        celda.classList.remove(jugadorX)
        celda.classList.remove(jugadorO)
        celda.removeEventListener('click',handleCellClick)
        celda.addEventListener('click', handleCellClick,{once:true})
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleCellClick(e){
    const cell = e.target
    const currentClass = isPlayer_0_Turn ? jugadorO : jugadorX
    placeMark(cell,currentClass)
    if(checkWin(currentClass)){
        endGame(false)
    } else if (isDraw()){
        endGame(true)
    } else{
        swapTurns();
        setBoardHoverClass();
    }
}

function endGame(draw){
    if(draw){
        winningMessageTextElement.innerText = '¡Es un Empate!'
    } else {
        winningMessageTextElement.innerText = `El Jugador con ${isPlayer_0_Turn ? "El Simbolo O": "El Simbolo X"} Gana !!`
    }
    winningMessageElement.classList.add('show')
}

function isDraw(){
    return[...elementosCelda].every(cell =>{
        return cell.classList.contains(jugadorX) || cell.classList.contains(jugadorO)
    })
}
function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}
function swapTurns(){
    isPlayer_0_Turn =! isPlayer_0_Turn
}

function setBoardHoverClass(){
    elementosTablero.classList.remove(jugadorX);
    elementosTablero.classList.remove(jugadorO);
    if (isPlayer_0_Turn){
        elementosTablero.classList.add(jugadorO);
    } else {
        elementosTablero.classList.add(jugadorX)
    }
}

function checkWin(currentClass){
    return winCondition.some(combination =>{
        return combination.every(index =>{
            return elementosCelda[index].classList.contains(currentClass)
        })
    })
}