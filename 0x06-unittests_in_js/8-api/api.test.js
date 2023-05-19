const { expect } = require("chai");
const request = require('request');


describe('Integration Testing', () => {
    describe('GET /', () => {
      it('Code: 200 | Body: Welcome to the payment system', (done) => {
        const options = {
          url: 'http://localhost:7865',
          method: 'GET',
        };
  
        request(options, function (error, response, body) {
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal('Welcome to the payment system');
          done();
        });
      });
    });
  });
