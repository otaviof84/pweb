function mostrarRaiz(numero) {
    const resultado = Math.sqrt(numero);
    document.getElementById("resultadoRaiz").innerHTML = `A raiz quadrada de ${numero} é ${resultado}`;
}

function escreverNaDiv() {
    document.getElementById("divTexto").innerHTML = "Este texto foi escrito por uma função JavaScript.";
}

function escreverDinamico() {
    const texto = document.getElementById("entradaUsuario").value;
    document.getElementById("textoDinamico").innerHTML = `Você digitou: ${texto}`;
}

