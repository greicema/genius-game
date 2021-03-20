let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

/*var somBlue = document.getElementById("somBlue");
var somRed = document.getElementById("somRed");
var somGreen = document.getElementById("somGreen");
var somYellow = document.getElementById("somYellow");*/
var somErrou = document.getElementById("somErrou");

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 400;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 100);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 300);
}

let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Você acertou: ${score}.\nIniciando próximo nível.`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return yellow;
    } else if (color == 2) {
        return red;
    } else if (color == 3) {
        return blue;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () => {
    somErrou.play();
    alert(`Você perdeu e fez: ${score} \nClique OK para reinicicar.`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Suineg! Clique para iniciar um novo jogo.');
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
yellow.onclick = () => click(1);
red.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();