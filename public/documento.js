import { emitirTextoEditor, selecionarDocument, emitirExcluirDocumento } from "./socket-front-document.js";

const parametros = new URLSearchParams(window.location.search); //Mudando nome do documento aberto
const nomeDocumento = parametros.get('nome');

const textEditor = document.getElementById('editor-texto');
const tituloDocumento = document.getElementById('titulo-documento'); //Mudando nome do documento aberto - part two
const botaoExcluir = document.getElementById("excluir-documento");

tituloDocumento.textContent = nomeDocumento || "Documento sem título";

selecionarDocument(nomeDocumento);

//Observa sempre que alguem soltar uma tecla no editor de texto
textEditor.addEventListener('keyup', () => {
    emitirTextoEditor({
        texto: textEditor.value,
        nomeDocumento
    });
});

function atualizarTextoEditor(texto) {
    textEditor.value = texto;
}

botaoExcluir.addEventListener('click', () => {
    emitirExcluirDocumento(nomeDocumento);
})

function alertaERedirecionar(nome) {
    if (nome === nomeDocumento) {
        alert(`O documento ${nome} excluído`);
        window.location.href = '/';
    }
}

export { atualizarTextoEditor, alertaERedirecionar };