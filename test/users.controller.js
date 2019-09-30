import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const { expect } = chai;

describe('Users', () => {
  it('should login success', () => request(Server)
    .post('/api/v1/users/login')
    .send({ username: 'aqua', 'password': '123456' })
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('id')
    }));
});
