import express from 'express';
import fs from 'fs';
import path from 'path';

const port = 7000;
const app = express();

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Definir ruta para servir el archivo HTML
app.get("/", (req, res) =>{
    const file = fs.readFileSync('public/css_cheat_sheet.html', 'utf8');
    res.status(200).send(file);
});

app.get("/:name", (req, res) => {
    console.log(req.params);
    const salute = `Hello ${req.params.name}!!`;
    res.status(200).send(salute);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
