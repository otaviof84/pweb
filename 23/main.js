let nums = [1, 2, 3, 4, 5];
let frutas = ["maçã", "banana", "uva"];
let pessoas = [];

// mostrar todos os números
function verNumeros() {
    document.getElementById("saidaNum").innerHTML = nums.join(", ");
}

// ver elemento por posição
function verPosicao() {
    let pos = prompt("Qual posição (0 até " + (nums.length - 1) + ")?");
    if (pos >= 0 && pos < nums.length) {
        alert("Posição " + pos + ": " + nums[pos]);
    } else {
        alert("Posição inválida");
    }
}

// frutas
function addFruta() {
    let f = prompt("Digite a fruta:");
    if (f) {
        frutas.push(f);
        mostrarFrutas();
    }
}

function tirarFruta() {
    let f = frutas.pop();
    if (f) {
        alert("Fruta tirada: " + f);
        mostrarFrutas();
    } else {
        alert("Não tem fruta na lista");
    }
}

function mostrarFrutas() {
    document.getElementById("saidaFrutas").innerHTML = frutas.join(" | ");
}

// pessoas
function addPessoa() {
    let p = prompt("Nome da pessoa:");
    if (p) {
        pessoas.push(p);
        mostrarPessoas();
    }
}

function tirarPessoa() {
    let p = pessoas.pop();
    if (p) {
        alert("Pessoa removida: " + p);
        mostrarPessoas();
    } else {
        alert("Lista vazia");
    }
}

function mostrarPessoas() {
    document.getElementById("saidaPessoas").innerHTML = pessoas.join(" - ");
}
