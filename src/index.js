const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const Resource = require('./models/Resource');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/resources', async (req, res) => {
  try {
    const resources = await Resource.findAll();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los recursos', error: error.message });
  }
});

app.post('/api/resources', async (req, res) => {
  try {
    const { title, description, imageUrl, youtubeUrl } = req.body;
    const resource = await Resource.create({ title, description, imageUrl, youtubeUrl });
    res.status(201).json(resource);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar recurso', error: error.message });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
