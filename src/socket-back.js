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

    socket.on('selecionar_documento', (nomeDocumento) => {
        const documento = encontrarDocumento(nomeDocumento);
        console.log(documento);
        socket.join(nomeDocumento);
    });

    socket.on('texto_editor', ({texto, nomeDocumento}) => {
        socket.to(nomeDocumento).emit('texto_editor_cliente', texto);
    });    
});

function encontrarDocumento(nomeDocumento) {
    return documentos.find(doc => doc.nome === nomeDocumento);
}

