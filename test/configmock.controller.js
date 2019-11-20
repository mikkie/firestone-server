import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const { expect, assert } = chai;

describe('ConfigMock', () => {
  it('should get ConfigMock', () => request(Server)
  .get('/api/v1/configmock/NWQ5MDVkYjlmYzg0ZDMyMjRiMGViNTljOjE2Nzg0M2Q5ZDQ3ZGJlMGE2OWE4MWEzYjBjNDgwNmY1NDM5NmM5ZmY5YjU4OWExNTdkMTE3Y2FjOWQzYmMzMGU=')
  .expect('Content-Type', /json/)
  .then(r => {
    expect(r.body)
    .to.be.an.an('object')
    .that.has.property('userId');
    assert.equal(r.body.userId,"5d905db9fc84d3224b0eb59c");
  }));

  it('should save ConfigMock', () => request(Server)
  .post('/api/v1/configmock')
  .send({accesstoken: "NWQ5MDVkYjlmYzg0ZDMyMjRiMGViNTljOjE2Nzg0M2Q5ZDQ3ZGJlMGE2OWE4MWEzYjBjNDgwNmY1NDM5NmM5ZmY5YjU4OWExNTdkMTE3Y2FjOWQzYmMzMGU=", update: {maxBuyNum : 4}})
  .expect('Content-Type', /json/)
  .then(r => {
    expect(r.body)
    .to.be.an.an('object')
    .that.has.property('maxBuyNum');
    assert.equal(r.body.maxBuyNum,4);
    expect(r.body).has.property('curBuyNum');
    assert.equal(r.body.curBuyNum,0);
  }));
});
