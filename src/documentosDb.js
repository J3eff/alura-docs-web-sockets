import { documentosColecao } from './dbConnect.js';

function obterDocuemtos() {
    const documentos = documentosColecao.find().toArray();
    return documentos;
}

function adicionarDocumento(nome) {
    const resultado = documentosColecao.insertOne({ nome, texto: "" });

   return resultado;
}

function encontrarDocumento(nome) {
    return documentosColecao.findOne({ nome });
}

function atualizaDocumento(nome, texto) {
    const atualizacao = documentosColecao.updateOne(
        { nome },
        {
            $set: { texto }
        }
    );

    return atualizacao;
}

export { encontrarDocumento, atualizaDocumento, obterDocuemtos, adicionarDocumento };