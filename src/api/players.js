// api/players.js

const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get('https://api-fantasy.llt-services.com/api/v4/players', {
      params: { 'x-lang': 'es' },
      headers: {
        // Añade aquí cualquier encabezado necesario
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error al obtener datos de la API externa:', error.message);
    res.status(500).json({ error: 'Error al obtener los datos de la API externa.' });
  }
};
