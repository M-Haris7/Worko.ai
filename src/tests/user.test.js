const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/userModel');

chai.use(chaiHttp);
chai.should();

describe('User API', () => {
  before((done) => {
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => done())
      .catch((err) => done(err));
  });

  after((done) => {
    mongoose.connection.close()
      .then(() => done())
      .catch((err) => done(err));
  });

  describe('GET /api/worko/user', () => {
    it('should get all users', (done) => {
      chai.request(app)
        .get('/api/worko/user')
        .set('Authorization', 'Bearer your_token')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  // Additional tests for other endpoints (POST, PUT, DELETE) would go here
});
