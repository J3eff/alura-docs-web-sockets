import { encontrarDocumento, atualizaDocumento, obterDocuemtos } from './documentosDb.js';
import io from './server.js';

io.on('connection', (socket) => {
    socket.on("obter_documentos", async (devolverDocumentos) => {
        const documentos = await obterDocuemtos();
        devolverDocumentos(documentos);
    })

    socket.on('selecionar_documento', async (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento); // Adiciona o cliente a uma sala especifica

        const documento = await encontrarDocumento(nomeDocumento);

        if (documento)
            devolverTexto(documento.texto);
    });

    socket.on('texto_editor', async ({ texto, nomeDocumento }) => {
        const atualizacao = await atualizaDocumento(nomeDocumento, texto);

        if (atualizacao.modifiedCount)
            socket.to(nomeDocumento).emit('texto_editor_cliente', texto);
    });
});



