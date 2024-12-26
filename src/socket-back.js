
import io from './server.js';

io.on('connection', (socket) => {
    console.log('Um cliente se conectou! ID: ' + socket.id);
    
    socket.on('texto_editor', (text) => {
        socket.broadcast.emit('texto_editor_cliente', text);
    });
});