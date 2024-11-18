const request = require('supertest');
const app = require('../../../src/index');
const sequelize = require('../../../src/utils/database');

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Sincronizar base de datos
});

afterAll(async () => {
  await sequelize.close(); // Cerrar conexión
});

describe('Pruebas de la API de recursos', () => {
  it('Debe obtener una lista vacía de recursos al inicio', async () => {
    const response = await request(app).get('/resources');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});
