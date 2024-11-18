const Resource = require('../../../src/models/Resource');

describe('Prueba del modelo Resource', () => {
  it('Debe crear una instancia válida del modelo Resource', () => {
    const resource = Resource.build({
      title: 'Test Resource',
      description: 'Test description',
      imageUrl: 'https://example.com/image.jpg',
      youtubeUrl: 'https://youtube.com/video',
    });
    expect(resource).toBeTruthy();
  });
});
