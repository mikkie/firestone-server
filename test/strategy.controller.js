import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const { expect, assert } = chai;

describe('strategy', () => {
    it('should get all strategies', () => request(Server)
        .get('/api/v1/strategy')
        .expect('Content-Type', /json/)
        .then(r => {
            expect(r.body)
                .to.be.an.an('array')
            assert.equal(r.body.length, 2);
        })
    );
    it('should get strategy by id', () => request(Server)
        .get('/api/v1/strategy/5da19b7d181fc3600c5544c2')
        .expect('Content-Type', /json/)
        .then(r => {
            expect(r.body)
                .to.be.an.an('object')
                .that.has.property('name')
                .equal("基础策略");
        })
    );
});