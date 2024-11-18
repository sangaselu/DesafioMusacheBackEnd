const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'https://lavenderblush-gazelle-697666.hostingersite.com', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json());


app.get('/api/test', (req, res) => {
  res.json({ message: 'La API está funcionando correctamente' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
