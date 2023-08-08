// Direcionando o NOME pelo prompt
let nome = prompt("Informe seu nome: ");

// let NOTA = Numer(prompt)
let n1 = Number(prompt("Informe a Nota1: "));
let n2 = Number(prompt("Informe a Nota2: "));
let n3 = Number(prompt("Informe a Nota3: "));
let media = (n1 + n2 + n3)/3;

// Armazenando a NOTA pelo nota1, nota2 etc
let nota1 = document.getElementById("nota1");
let nota2 = document.getElementById("nota2");
let nota3 = document.getElementById("nota3");
let med = document.getElementById("media");

// Identificando o conteúdo para ser apresentado na página
nota1.textContent = n1;
nota2.textContent = n2;
nota3.textContent = n3;
med.textContent = media;


// Armazenando o NOME pelo id1
let ident = document. getElementById("id1");

// Identificando o conteúdo para ser apresentado na página
ident.textContent = nome;
// OU ident.innerHTML = nome;
// OU ident.innerText = nome;

if (condicao) {
// instruções
} else {
// instruções
}