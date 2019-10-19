import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const { expect, assert } = chai;

describe('mocktrade', () => {
    it('should get mocktrade', () => request(Server)
        .get('/api/v1/mocktrade/NWQ5MDVkYjlmYzg0ZDMyMjRiMGViNTljOjE2Nzg0M2Q5ZDQ3ZGJlMGE2OWE4MWEzYjBjNDgwNmY1NDM5NmM5ZmY5YjU4OWExNTdkMTE3Y2FjOWQzYmMzMGU=')
        .expect('Content-Type', /json/)
        .then(r => {
            expect(r.body)
                .to.be.an.an('array')
            assert.equal(r.body.length, 3);
        })
    );
    it('should update mocktrade', () => request(Server)
        .post('/api/v1/mocktrade')
        .send({ accesstoken: 'NWQ5MDVkYjlmYzg0ZDMyMjRiMGViNTljOjE2Nzg0M2Q5ZDQ3ZGJlMGE2OWE4MWEzYjBjNDgwNmY1NDM5NmM5ZmY5YjU4OWExNTdkMTE3Y2FjOWQzYmMzMGU=', mocktradeid: "5da1800e87b64fb6f4c32503", update: { deleted: true, state: '运行中', result: '以10.22买入200股' } })
        .expect('Content-Type', /json/)
        .then(r => {
            expect(r.body)
                .to.be.an.an('object')
            assert.equal(r.body.deleted, true);
            assert.equal(r.body.state, '运行中');
            assert.equal(r.body.result, '以10.22买入200股');
        })
    );
    it('should create a new mocktrade', () => request(Server)
        .post('/api/v1/mocktrade/new')
        .send({
            accesstoken: 'NWQ5MDVkYjlmYzg0ZDMyMjRiMGViNTljOjE2Nzg0M2Q5ZDQ3ZGJlMGE2OWE4MWEzYjBjNDgwNmY1NDM5NmM5ZmY5YjU4OWExNTdkMTE3Y2FjOWQzYmMzMGU=', strategyId: "5da19b7d181fc3600c5544c2", "params": {
                "code": "002899",
                "monitorTime": {
                    "start": "09:30",
                    "end": "15:00"
                },
                "index_percent": {
                    "low": -1.5,
                    "high": 3.0
                },
                "percent": {
                    "low": -2.0,
                    "high": 3.0
                }
            }
        })
        .expect('Content-Type', /json/)
        .then(r => {
            expect(r.body)
                .to.be.an.an('object')
            assert.equal(r.body.code, "002899");
            assert.equal(r.body.params.monitorTime.start, "09:30");
            assert.equal(r.body.params.percent.low, -2.0);
        })
    );
});