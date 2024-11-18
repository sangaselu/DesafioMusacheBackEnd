const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());

const Resource = require('./models/Resource');

app.get('/resources', async (req, res) => {
  try {
    const resources = await Resource.findAll(); 
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los recursos' });
  }
});

app.post('/resources', async (req, res) => {
  try {
    const resource = await Resource.create(req.body);
    res.status(201).json(resource);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el recurso' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
