import { emitirTextoEditor, selecionarDocument } from "./socket-front-document.js";

//Mudando nome do documento aberto
const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get('nome');

const textEditor = document.getElementById('editor-texto');

//Mudando nome do documento aberto - part two
const tituloDocumento = document.getElementById('titulo-documento');
tituloDocumento.textContent = nomeDocumento || "Documento sem título";

selecionarDocument(nomeDocumento);

//Observa sempre que alguem soltar uma tecla no editor de texto
textEditor.addEventListener('keyup', () => {
    emitirTextoEditor(textEditor.value);
});

function atualizarTextoEditor(texto) {
    textEditor.value = texto;
}

export { atualizarTextoEditor };