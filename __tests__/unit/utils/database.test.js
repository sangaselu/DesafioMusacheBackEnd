const sequelize = require('../../../src/utils/database');

describe('Prueba de conexión a la base de datos', () => {
  it('Debe conectarse correctamente a la base de datos', async () => {
    await expect(sequelize.authenticate()).resolves.not.toThrow();
  });
});
