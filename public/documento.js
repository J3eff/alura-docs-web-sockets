const socket = io();

const textEditor = document.getElementById('editor-texto');

//Observa sempre que alguem soltar uma tecla no editor de texto
textEditor.addEventListener('keyup', () => {
    socket.emit('texto_editor', textEditor.value);
});