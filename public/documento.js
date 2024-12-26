import { emitirTextoEditor } from "./socket-front-document.js";

const textEditor = document.getElementById('editor-texto');

//Observa sempre que alguem soltar uma tecla no editor de texto
textEditor.addEventListener('keyup', () => {
    emitirTextoEditor(textEditor.value);
});

function atualizarTextoEditor(texto) {
    textEditor.value = texto;
}

export { atualizarTextoEditor };