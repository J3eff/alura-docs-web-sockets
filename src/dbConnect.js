import { MongoClient } from "mongodb";
import 'dotenv/config';

const client = new MongoClient(process.env.MONGODB_URI)

let documentosColecao;

try { 
    await client.connect();
    const db = client.db('alura-websockets');
    documentosColecao = db.collection('documentos');

    console.log('Conectado ao banco de dados');
} catch (erro) {
    console.log(erro);
}

export { documentosColecao }; // Exporta a coleção de documentos para ser utilizada em outros arquivos.