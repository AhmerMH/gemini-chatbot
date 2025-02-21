const request = require('supertest');
const { app, server } = require('../index.js');

describe('Chat API', () => {
  test('POST /api/chat success path', async () => {
    const response = await request(app).post('/api/chat').send({
      message: 'Hello',
      modelType: 'gemini-multi',
    });
    expect(response.body).toHaveProperty('response');
  });

  afterAll((done) => {
    server.close(done);
  });
});
