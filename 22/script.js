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


