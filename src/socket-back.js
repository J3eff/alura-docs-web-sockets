import io from './server.js';
import { documentosColecao } from './dbConnect.js';

io.on('connection', (socket) => {
    console.log('Um cliente se conectou! ID: ' + socket.id);

    socket.on('selecionar_documento', async (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento); // Adiciona o cliente a uma sala especifica

        const documento = await encontrarDocumento(nomeDocumento);
        console.log(documento);

        if (documento) {
            devolverTexto(documento.texto);
        }
    });

    socket.on('texto_editor', ({ texto, nomeDocumento }) => {
        const documento = encontrarDocumento(nomeDocumento);
        if (documento) {
            documento.texto = texto;
            socket.to(nomeDocumento).emit('texto_editor_cliente', texto);
        }
    });
});

function encontrarDocumento(nome) {
    return documentosColecao.findOne({ nome });
}

