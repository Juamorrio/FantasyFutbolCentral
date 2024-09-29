// backend/server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Para habilitar CORS

const app = express();
const PORT = 5173; // Puedes usar otro puerto si prefieres

// Habilitar CORS
app.use(cors());

// Ruta para obtener jugadores
app.get('/api/players', async (req, res) => {
    try {
        const response = await axios.get('https://api-fantasy.llt-services.com/api/v3/players', {
            params: { 'x-lang': 'es' } // Asegúrate de agregar cualquier parámetro necesario
        });
        res = response.data;
    } catch (error) {
        console.error('Error al obtener los jugadores:', error.message);
        res.status(500).json({ error: 'Error al obtener jugadores' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
