function mostrarData(){
    const dataAtual = newDate();
    document.getElementById("data").innerHTML = dataAtual;
}

 function mostrarData() {
    const dataAtual = new Date(); 
     document.getElementById("data").innerHTML = dataAtual.toDateString(); 
}