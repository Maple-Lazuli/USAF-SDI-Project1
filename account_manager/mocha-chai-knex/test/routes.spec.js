process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');



chai.use(chaiHttp);

describe('GET /api/v1/users/', function() {
    it('should return all users', function(done) {
        chai.request(server)
        .get('/api/v1/users/')
        .end(function(err,res) {
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