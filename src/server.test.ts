import supertest from 'supertest';

import {server} from './app'
const request = supertest(server._app);

describe('/test endpoint', () => {
  it('should return a response', async () => {
    const response = await request.get('/check');
    expect(response.status).toBe(200);
    expect(response.text).toBe('{"success":"true","message":"NodeJs Backend up!"}');
  })
});
