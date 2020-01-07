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
            assert.equal(r.body.length, 4);
        })
    );
    it('should get basic strategy', () => request(Server)
        .get('/api/v1/strategy/5da19b7d181fc3600c5544c2')
        .expect('Content-Type', /json/)
        .then(r => {
            expect(r.body)
                .to.be.an.an('object')
                .that.has.property('name')
                .equal("基础策略");
        })
    );
    it('should get ydls strategy', () => request(Server)
        .get('/api/v1/strategy/5da19b7d181fc3600c5544c3')
        .expect('Content-Type', /json/)
        .then(r => {
            expect(r.body)
                .to.be.an.an('object')
                .that.has.property('name')
                .equal("异动拉升");
            expect(r.body).has.property('parameters')
                .to.be.an.an('object')
                .that.has.property('speed')
                .to.be.an.an('object')
                .that.has.property('time')
                .equal("2");
        })
    );
});