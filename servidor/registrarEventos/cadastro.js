import { cadastrarUsuario, encontrarUsuario } from "../db/usuariosDb.js";

cadastrarUsuario

function registrarEventosCadastro(socket, io) {
    socket.on("cadastrar_usuario", async (dados) => {
        const usuario = await encontrarUsuario(dados.nome);

        if (usuario === null) {
            const resultado = await cadastrarUsuario(dados);

            if (resultado.acknowledged)
                socket.emit("cadastrado_sucesso", { sucesso: true })
            else
                socket.emit("cadastro_erro")
        } else {
           socket.emit("usuario_ja_existente")
        }
    });
}

export default registrarEventosCadastro;