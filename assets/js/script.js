let pontosA = 0;
let pontosB = 0;

function adicionarPontotimeA() {
 pontosA++;
 document.getElementById('pontos-timeA').innerText = pontosA;
}

function adicionarPontotimeB() {
 pontosB++;
 document.getElementById('pontos-timeB').innerText = pontosB;
}

function zerarPlacar() {
 pontosA --;
 pontosB --;
 document.getElementById('pontos-timeA').innerText = pontosA;
 document.getElementById('pontos-timeB').innerText = pontosB;
}
