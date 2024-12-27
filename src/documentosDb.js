import { documentosColecao } from './dbConnect.js';

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

export { encontrarDocumento, atualizaDocumento };