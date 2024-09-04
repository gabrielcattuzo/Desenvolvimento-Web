function somar(){
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    const resultado = num1 + num2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function multiplicar(){
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    const resultado = num1 * num2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

// troca de cores do background

let listaCores = ['yellow', 'blue', 'darkred', 'darkblue', 'purple', 'darkgreen', 'green']

// document.body.style.background = listaCores[0];

function trocarCores(){
    document.body.style.background = listaCores[Math.floor(5 * Math.random())]
}

setInterval(trocarCores, 1000);