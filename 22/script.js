function mostrarAlerta() {
    alert("Olá! Este é um alerta vindo de uma função.");
}

function escreve() {
    document.body.innerHTML += "<p>Texto inserido pela função escreve().</p>";
}

function calcularRaizes() {
    let resultado = "";
    const numeros = [25, 36, 49];
    for (let num of numeros) {
        resultado += `Raiz de ${num} é ${Math.sqrt(num)}<br>`;
    }
    document.getElementById("resultadoRaiz").innerHTML = resultado;
}

function textoDinamico() {
    const texto = document.getElementById("entradaTexto").value;
    document.getElementById("saidaTexto").innerHTML = `Você digitou: ${texto}`;
}

function contarNumeros() {
    let n = parseInt(prompt("Digite um número:"));
    let conteudo = "";
    for (let i = 1; i <= n; i++) {
        conteudo += i + " ";
    }
    document.getElementById("numerosContados").innerHTML = conteudo;
}
