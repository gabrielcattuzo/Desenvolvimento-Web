// troca de cores do background

let listaCores = ['yellow', 'blue', 'darkred', 'darkblue', 'purple', 'darkgreen', 'green']

// document.body.style.background = listaCores[0];

function trocarCores(){
    document.body.style.background = listaCores[Math.floor(5 * Math.random())]
}

setInterval(trocarCores, 1000);
