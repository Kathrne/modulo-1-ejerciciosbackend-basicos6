// const shuffle = require('lodash/shuffle');

// const array = [9, 3, 5, 3, 4];

// const arrayAcomodado = shuffle(array);

// console.log(arrayAcomodado);

// console.log("¡Hola desde index.js!");

const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Este es un servidor básico usando Express');
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
