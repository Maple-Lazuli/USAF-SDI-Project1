process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');
var knex = require('../db/knex');


chai.use(chaiHttp);

describe('API Routes', function () {
    describe('GET /api/v1/supervisors/all', function () {
        it('should return all supervisors relations', function (done) {
            chai.request(server)
                .get('/api/v1/supervisors/all')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json; // jshint ignore:line
                    res.body.should.be.a('array');
                    res.body.length.should.equal(2);
                    res.body[0].should.have.property('user');
                    res.body[0].user.should.equal(1);
                    res.body[0].should.have.property('supervisor');
                    res.body[0].supervisor.should.equal(2);
                    done();
                });
        });
    });
})