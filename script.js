let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


// variaveis de som
var bip=document.getElementById("bip");
var ruido=document.getElementById("ruido");
var touch=document.getElementById("touch");


//cria ordem aleatoria de cores
let shuffleOrder = () => {
  
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for(let i in order) {
          bip.play();
        let elementColor = createColorElement(order[i]);
       bip.play();
        lightColor(elementColor, Number(i) + 1);
        bip.play();
    }
}
//acende a proxima cor
let lightColor = (element, number) => {
    bip.play();
    number = number * 500;
    setTimeout(() => {
        bip.play();
        element.classList.add('selected');
        bip.play();
    }, number - 250);
  
    setTimeout(() => {
        bip.play();
        element.classList.remove('selected');
        bip.play();
    });
}
//checa botoes clicados igual mesma ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            ruido.play();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//funcao para clique usuario

let click = (color) => {
    touch.play();
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout(() => {
        touch.play();
        createColorElement(color).classList.remove('selected');
      checkOrder();  
    },250);  
}

//funcao retorna cor

let createColorElement = (color) => {
    if (color == 0) {
        return green;
        bip.play();
    } else if (color == 1) {
        return red;
        bip.play();
    } else if (color == 2) {
        return yellow;
        bip.play();
    } else if (color == 3 ) {
        return blue;
        bip.play();
    }
}

//funcao para proximo nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
    bip.play();
}

// funcao game over
let gameOver = () =>{
    ruido.play();
   
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];
    
    playGame();
}

//funcao inicio jogo
let playGame = () => {
    alert(`Bem-vindo ao Genius! Iniciando novo jogo!`);
    score = 0;
   
    nextLevel();
  
}

//eventos de clique para as cores

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio jogo
playGame();