import io from './server.js';

const documentos = [
    {
        nome: "JavaScript",
        texto: "texto de javascript"

    },
    {
        nome: "Node",
        texto: "texto de node"
    },
    {
        nome: "Socket.io",
        texto: "texto de socket.io"
    }
]

io.on('connection', (socket) => {
    console.log('Um cliente se conectou! ID: ' + socket.id);

    socket.on('selecionar_documento', (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento); // Adiciona o cliente a uma sala especifica

        const documento = encontrarDocumento(nomeDocumento);
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

function encontrarDocumento(nomeDocumento) {
    return documentos.find(doc => doc.nome === nomeDocumento);
}

