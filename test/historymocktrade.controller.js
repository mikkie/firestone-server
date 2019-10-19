import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const { expect, assert } = chai;

describe('history mocktrade', () => {
    it('should query history mocktrade', () => request(Server)
        .post('/api/v1/mocktrade/history')
        .send({ accesstoken: 'NWQ5MDVkYjlmYzg0ZDMyMjRiMGViNTljOjE2Nzg0M2Q5ZDQ3ZGJlMGE2OWE4MWEzYjBjNDgwNmY1NDM5NmM5ZmY5YjU4OWExNTdkMTE3Y2FjOWQzYmMzMGU=', createdDate: "2019-09-15", code : '300694' })
        .expect('Content-Type', /json/)
        .then(r => {
            expect(r.body)
                .to.be.an.an('array')
            assert.equal(r.body[0].deleted, false);
            assert.equal(r.body[0].state, '停止');
            assert.equal(r.body[0].code, '300694');
        })
    );
});