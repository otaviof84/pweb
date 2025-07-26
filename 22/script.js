function mostrarRaiz(numero) {
    var raiz = Math.sqrt(numero);
    alert(`A raiz quadrada de ${numero} é ${raiz}`);
}

function escreverNaDiv() {
    document.getElementById("divTexto").innerHTML = "Este texto foi escrito por uma função JavaScript.";
}

function escreverDinamico() {
    const texto = document.getElementById("entradaUsuario").value;
    document.getElementById("textoDinamico").innerHTML = `Você digitou: ${texto}`;
}
function escreverDinamico() {
    const textoDigitado = document.getElementById("entradaUsuario").value;
    const destino = document.getElementById("textoDinamico");

    if (textoDigitado.trim() === "") {
        destino.innerHTML = "Por favor, digite algo.";
    } else {
        destino.innerHTML = `Você digitou: ${textoDigitado}`;
    }
}


