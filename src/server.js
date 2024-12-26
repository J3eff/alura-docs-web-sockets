import express from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const port = process.env.port || 3000;

// Get the current path
const currentPath = url.fileURLToPath(import.meta.url);
const publicDirectory = path.join(currentPath, "../..", "public");
app.use(express.static(publicDirectory)); //Pagina estatica -> Utiliza de forma estatica os arquivos selecionados.

const serverHttp = http.createServer(app);

serverHttp.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const io = new Server(serverHttp);

export default io; // Exporta o io para ser utilizado em outros arquivos.