const socket = io();

function emitirCadastrarUsuario(dados) {
    socket.emit("cadastrar_usuario", dados);
}

socket.on("cadastrado_sucesso", () => alert("Cadastro realizado com sucesso!"));
socket.on("cadastrado_erro", () => alert("Erro no cadastro!"));
socket.on("usuario_ja_existente", () => alert("Usuário já existe!"));

export { emitirCadastrarUsuario };