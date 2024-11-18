const express = require('express');
const bodyParser = require('body-parser');
const Resource = require('./models/Resource');

const app = express();
app.use(bodyParser.json());

app.post('/resources', async (req, res) => {
  try {
    const { title, description, imageUrl, youtubeUrl } = req.body;
    const resource = await Resource.create({ title, description, imageUrl, youtubeUrl });
    res.status(201).json(resource);
  } catch (error) {
    console.error('Error al agregar recurso:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

module.exports = app;
