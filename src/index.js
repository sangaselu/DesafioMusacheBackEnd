const express = require('express');
const sequelize = require('./utils/database');
const Resource = require('./models/Resource');

const app = express();
app.use(express.json());

app.get('/resources', async (req, res) => {
  const resources = await Resource.findAll();
  res.json(resources);
});

sequelize.sync()
  .then(() => console.log('Base de datos sincronizada'))
  .catch((err) => console.error('Error al sincronizar la base de datos:', err));

module.exports = app; 
