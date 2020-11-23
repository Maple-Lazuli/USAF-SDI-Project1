process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');
var knex = require('../db/knex');


chai.use(chaiHttp);

describe('API Routes', function () {

    //Before each test, migrate and seed the database
    beforeEach(function (done) {
        knex.migrate.rollback()
            .then(function () {
                knex.migrate.latest()
                    .then(function () {
                        return knex.seed.run()
                            .then(function () {
                                done();
                            });
                    });
            });
    });
    //After each test, clear the database
    afterEach(function (done) {
        knex.migrate.rollback()
            .then(function () {
                done();
            });
    });




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
    describe('GET /api/v1/supervisors/supervisee/:id', function () {
        it('should troops of the user', function (done) {
            chai.request(server)
                .get('/api/v1/supervisors/supervisee/2')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json; // jshint ignore:line
                    res.body.should.be.a('array');
                    res.body.length.should.equal(1);
                    res.body[0].should.have.property('user');
                    res.body[0].user.should.equal(1);
                    done();
                });
        })
    })
    describe('GET /api/v1/supervisors/supervisor/:id', function () {
        it('should return supervisor of the user', function (done) {
            chai.request(server)
                .get('/api/v1/supervisors/supervisor/1')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json; // jshint ignore:line
                    res.body.should.be.a('array');
                    res.body.length.should.equal(1);
                    res.body[0].should.have.property('supervisor');
                    res.body[0].supervisor.should.equal(2);
                    done();
                });
        })
    })

    describe('POST /api/v1/supervisors/add/', function () {
        it('should add a relation', function (done) {
            chai.request(server)
                .post('/api/v1/supervisors/add/')
                .send({
                    "user": 4,
                    "supervisor": 3
                })
                .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                })
        })
    })

    describe('DELETE /api/v1/supervisors/remove/', function () {
        it('should remove a relation', function (done) {
            chai.request(server)
                .delete('/api/v1/supervisors/remove/')
                .send({
                    "user": 4,
                    "supervisor": 3
                })
                .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                })
        })
    })
})