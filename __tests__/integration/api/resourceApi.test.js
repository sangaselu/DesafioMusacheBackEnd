const request = require('supertest');
const { app } = require('../../../src/index');

describe('Pruebas de la API de recursos', () => {
  let server;
  let baseUrl;

  beforeAll((done) => {
 
    server = app.listen(0, () => {
      const { port } = server.address();
      baseUrl = `http://localhost:${port}`; 
      console.log(`Servidor de pruebas corriendo en ${baseUrl}`);
      done();
    });
  });

  afterAll(() => {

    server.close();
  });

  it('Debe obtener una lista vacía de recursos al inicio', async () => {
    const response = await request(baseUrl).get('/api/resources'); 
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});
