import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const { expect, assert } = chai;

describe('Users', () => {
  let accesstoken = null
  it('should login success', () => request(Server)
  .post('/api/v1/users/login')
  .send({ username: 'admin', 'password': '123456' })
  .expect('Content-Type', /json/)
  .then(r => {
    expect(r.body)
    .to.be.an.an('object')
    .that.has.property('id');
    accesstoken = r.body.access_token;
  }));
  it('should auth success', () => request(Server)
    .get('/api/v1/users/auth')
    .set('accesstoken', accesstoken)
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('_id');
      let actual_token = Buffer.from(r.body._id + ':' + r.body.access_token).toString('base64');  
      assert.equal(actual_token,accesstoken);
    }));
});
