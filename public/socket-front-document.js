import { atualizarTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocument(nomeDocumento) {
    //Acknowledgements -> https://socket.io/docs/v4/emitting-events/#Acknowledgements
    socket.emit('selecionar_documento', nomeDocumento, (texto) => {
        atualizarTextoEditor(texto);
    })
}

function emitirTextoEditor(dados) {
    socket.emit('texto_editor', dados);
}

socket.on('texto_editor_cliente', (texto) => {
    atualizarTextoEditor(texto);
});


export { emitirTextoEditor, selecionarDocument };