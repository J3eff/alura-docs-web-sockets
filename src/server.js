import express from 'express';
import url from 'url';
import path from 'path';    

const app = express();
const port = process.env.port || 3000;

// Get the current path
const currentPath = url.fileURLToPath(import.meta.url);
const publicDirectory = path.join(currentPath, "../..", "public");

//Pagina estatica -> Utiliza de forma estatica os arquivos selecionados.
app.use(express.static(publicDirectory));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});