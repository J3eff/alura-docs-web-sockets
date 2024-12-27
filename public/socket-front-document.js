import { atualizarTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocument(nomeDocumento) {
    socket.emit('selecionar_documento', nomeDocumento)
}

function emitirTextoEditor(dados) {
    socket.emit('texto_editor', dados);
}

socket.on('texto_editor_cliente', (texto) => {
    atualizarTextoEditor(texto);
});


export { emitirTextoEditor, selecionarDocument };