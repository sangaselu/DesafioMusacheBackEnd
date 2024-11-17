const express = require('express');
const cors = require('cors');
const Resource = require('./models/Resource');
const sequelize = require('./utils/database');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/resources', async (req, res) => {
  try {
    const resources = await Resource.findAll();
    res.json(resources);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los recursos' });
  }
});


app.post('/api/resources', async (req, res) => {
  try {
    const newResource = await Resource.create(req.body);
    res.status(201).json(newResource);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al guardar el recurso' });
  }
});


sequelize
  .sync()
  .then(() => {
    console.log('Conexión a la base de datos establecida');
    app.listen(4000, () => {
      console.log('Servidor corriendo en http://localhost:4000');
    });
  })
  .catch((error) => console.error('Error al conectar con la base de datos:', error));
