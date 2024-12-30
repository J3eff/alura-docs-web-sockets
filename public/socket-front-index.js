import { inserirLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documentos) => {
    documentos.forEach((documento) => {
        inserirLinkDocumento(documento.nome);
    });
});

function emitirAdicionarDocumento(nomeDocumento) {
    socket.emit("adicionar_documento", nomeDocumento);
}

socket.on("adicionar_documento_interface", (nomeDocumento) => {
    inserirLinkDocumento(nomeDocumento);
})

export { emitirAdicionarDocumento };