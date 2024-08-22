const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para analizar datos JSON en el cuerpo de la solicitud
app.use(bodyParser.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Ruta para manejar solicitudes POST
app.post('/datos', (req, res) => {
  const datos = req.body;
  res.send(`Datos recibidos: ${JSON.stringify(datos)}`);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en <http://localhost>:${port}`);
});