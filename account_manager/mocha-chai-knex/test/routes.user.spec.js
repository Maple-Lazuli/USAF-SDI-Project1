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



    // Test for pull all users
    describe('GET /api/v1/all/', function () {
        it('should return all users', function (done) {
            chai.request(server)
                .get('/api/v1/all/')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                    res.body.length.should.equal(4);
                    res.body[0].should.have.property('firstName');
                    res.body[0].firstName.should.equal('Stevens');
                    res.body[0].should.have.property('lastName');
                    res.body[0].lastName.should.equal('Mitchel');
                    res.body[0].should.have.property('paygrade');
                    res.body[0].paygrade.should.equal('E-2');
                    res.body[0].should.have.property('rank');
                    res.body[0].rank.should.equal('Amn');
                    res.body[0].should.have.property('gender');
                    res.body[0].gender.should.equal('Female');
                    res.body[0].should.have.property('AFSC');
                    res.body[0].AFSC.should.equal('1Q251A');
                    res.body[0].should.have.property('unit');
                    res.body[0].unit.should.equal('6101st Air Base Wing');
                    res.body[0].should.have.property('DOR');
                    res.body[0].DOR.should.equal('1-5-1998');
                    done();
                })
        })
    });


    //Test for existing user
    describe('Get /api/v1/user/:id', function () {
        it('should return the user that matches the ID', function (done) {
            chai.request(server)
                .get('/api/v1/user/2')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.should.be.a('object');
                    res.body[0].should.have.property('firstName');
                    res.body[0].firstName.should.equal('Athanasios');
                    res.body[0].should.have.property('lastName');
                    res.body[0].lastName.should.equal('Peloquin');
                    res.body[0].should.have.property('paygrade');
                    res.body[0].paygrade.should.equal('E-9');
                    res.body[0].should.have.property('rank');
                    res.body[0].rank.should.equal('CMSgt');
                    res.body[0].should.have.property('gender');
                    res.body[0].gender.should.equal('Male');
                    res.body[0].should.have.property('AFSC');
                    res.body[0].AFSC.should.equal('1Q251A');
                    res.body[0].should.have.property('unit');
                    res.body[0].unit.should.equal('5900th Wing 5900th Composite Wing');
                    res.body[0].should.have.property('DOR');
                    res.body[0].DOR.should.equal('7-1-2017');
                    done();
                })
        })
    })

    //Test for nonexistent User
    describe('Get /api/v1/user/:id', function () {
        it('should return in indication that the user was not found', function (done) {
            chai.request(server)
                .get('/api/v1/user/50000')
                .end(function (err, res) {
                    res.should.have.status(400);
                    done();
                })
        })
    })

    //Test for existing user by sessionID
    describe('Get /api/v1/userSession/:sessionID', function () {
        it('should return the user that matches the ID', function (done) {
            chai.request(server)
                .get('/api/v1/userSession/22')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.should.be.a('object');
                    res.body[0].should.have.property('firstName');
                    res.body[0].firstName.should.equal('Jeffrie');
                    res.body[0].should.have.property('lastName');
                    res.body[0].lastName.should.equal('Caesar');
                    res.body[0].should.have.property('paygrade');
                    res.body[0].paygrade.should.equal('E-4');
                    res.body[0].should.have.property('rank');
                    res.body[0].rank.should.equal('SrA');
                    res.body[0].should.have.property('gender');
                    res.body[0].gender.should.equal('Female');
                    res.body[0].should.have.property('AFSC');
                    res.body[0].AFSC.should.equal('1Q251A');
                    res.body[0].should.have.property('unit');
                    res.body[0].unit.should.equal('4950th Test Wing');
                    res.body[0].should.have.property('DOR');
                    res.body[0].DOR.should.equal('2-7-2020');
                    done();
                })
        })
    })

    //Test for nonexistent User Session
    describe('Get /api/v1/userSession/:sessionID', function () {
        it('should return in indication that the user was not found', function (done) {
            chai.request(server)
                .get('/api/v1/userSession/50000')
                .end(function (err, res) {
                    res.should.have.status(400);
                    done();
                })
        })
    })

    // Test for adding users to the database
    describe('POST /api/v1/user', function () {
        it('should add a user', function (done) {
            chai.request(server)
                .post('/api/v1/user')
                .send({
                    "firstName": "Ada",
                    "lastName": "Lazuli",
                    "sessionid": 1,
                    "paygrade": "E-5",
                    "rank": "SSgt",
                    "gender": "Female",
                    "rankInt": 5,
                    "AFSC": "1N251C",
                    "unit": "6101st Air Base Wing",
                    "DOR": "8-1-2019"
                })
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.should.be.a('object');
                    res.body[0].should.have.property('firstName');
                    res.body[0].firstName.should.equal('Ada');
                    res.body[0].should.have.property('lastName');
                    res.body[0].lastName.should.equal('Lazuli');
                    res.body[0].should.have.property('paygrade');
                    res.body[0].paygrade.should.equal('E-5');
                    res.body[0].should.have.property('rank');
                    res.body[0].rank.should.equal('SSgt');
                    res.body[0].should.have.property('gender');
                    res.body[0].gender.should.equal('Female');
                    res.body[0].should.have.property('AFSC');
                    res.body[0].AFSC.should.equal('1N251C');
                    res.body[0].should.have.property('unit');
                    res.body[0].unit.should.equal('6101st Air Base Wing');
                    res.body[0].should.have.property('DOR');
                    res.body[0].DOR.should.equal('8-1-2019');
                    done();
                })
        })
    })

    describe('PUT /api/vi/user/:id', function () {
        it('should update a user', function (done) {
            chai.request(server)
                .put('/api/v1/user/1')
                .send({
                    AFSC: '1N271C',
                    lastName: 'Owens'
                })
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.should.be.a('object');
                    res.body[0].should.have.property('firstName');
                    res.body[0].firstName.should.equal('Stevens');
                    res.body[0].should.have.property('lastName');
                    res.body[0].lastName.should.equal('Owens');
                    res.body[0].should.have.property('paygrade');
                    res.body[0].paygrade.should.equal('E-2');
                    res.body[0].should.have.property('rank');
                    res.body[0].rank.should.equal('Amn');
                    res.body[0].should.have.property('gender');
                    res.body[0].gender.should.equal('Female');
                    res.body[0].should.have.property('AFSC');
                    res.body[0].AFSC.should.equal('1N271C');
                    res.body[0].should.have.property('unit');
                    res.body[0].unit.should.equal('6101st Air Base Wing');
                    res.body[0].should.have.property('DOR');
                    res.body[0].DOR.should.equal('1-5-1998');
                    done();
                })
        })
    })
    describe('PUT /api/vi/user/:id', function () {
        it('should error when updating a user that does not exist', function (done) {
            chai.request(server)
                .put('/api/v1/user/100')
                .send({
                    AFSC: '1N271C',
                    lastName: 'Owens'
                })
                .end(function (err, res) {
                    res.should.have.status(400);
                    done();
                });
        })
    })

    describe('DELETE /api/v1/user/:id', function () {
        it('should DELETE a user', function (done) {
            chai.request(server)
                .delete('/api/v1/user/1')
                .end(function (error, response) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.should.be.a('object');
                    res.body[0].should.have.property('firstName');
                    res.body[0].firstName.should.equal('Athanasios');
                    res.body[0].should.have.property('lastName');
                    res.body[0].lastName.should.equal('Peloquin');
                    res.body[0].should.have.property('paygrade');
                    res.body[0].paygrade.should.equal('E-9');
                    res.body[0].should.have.property('rank');
                    res.body[0].rank.should.equal('CMSgt');
                    res.body[0].should.have.property('gender');
                    res.body[0].gender.should.equal('Male');
                    res.body[0].should.have.property('AFSC');
                    res.body[0].AFSC.should.equal('1Q251A');
                    res.body[0].should.have.property('unit');
                    res.body[0].unit.should.equal('5900th Wing 5900th Composite Wing');
                    res.body[0].should.have.property('DOR');
                    res.body[0].DOR.should.equal('7-1-2017');

                    chai.request(server)
                        .get('/api/v1/all')
                        .end(function (err, res) {
                            res.should.have.status(200);
                            res.should.be.json;
                            res.should.be.a('object');
                            res.body[0].should.have.property('firstName');
                            res.body[0].firstName.should.equal('Stevens');
                            res.body[0].should.have.property('lastName');
                            res.body[0].lastName.should.equal('Owens');
                            res.body[0].should.have.property('paygrade');
                            res.body[0].paygrade.should.equal('E-2');
                            res.body[0].should.have.property('rank');
                            res.body[0].rank.should.equal('Amn');
                            res.body[0].should.have.property('gender');
                            res.body[0].gender.should.equal('Female');
                            res.body[0].should.have.property('AFSC');
                            res.body[0].AFSC.should.equal('1N271C');
                            res.body[0].should.have.property('unit');
                            res.body[0].unit.should.equal('6101st Air Base Wing');
                            res.body[0].should.have.property('DOR');
                            res.body[0].DOR.should.equal('1-5-1998');
                            done();

                        })

                })
        })
    })

})