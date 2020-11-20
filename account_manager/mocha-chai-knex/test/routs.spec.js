process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');



chai.use(chaiHttp);

describe('GET /api/v1/users', function() {
    it('should return all users', function(done) {
        chai.request(server)
        .get('/api/v1/shows')
        .end(function(err,res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body.length.should.equal(4);
            res.body[0].should.have.property('firstName');
            res.body[0].firstName.should.equal('Stevens');
            res.body[0].should.have.property('lastName');
            res.body[0].lastName.should.equal('Stevens');
            res.body[0].should.have.property('firstName');
            res.body[0].userid.should.equal('Stevens');
            res.body[0].should.have.property('firstName');
            res.body[0].firstName.should.equal('Stevens');
            res.body[0].should.have.property('firstName');
            res.body[0].firstName.should.equal('Stevens');
            
            res.body[0].explicit.should.equal(false);
            done();
        })
    })
});