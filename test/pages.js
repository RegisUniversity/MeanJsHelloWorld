/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var server = require('../bin/www');

describe('server', function () {
  before(function () {
    server.listen(8082);
  });

  after(function () {
    server.close();
  });
});

var assert = require('assert'),
    http = require('http');

describe('/', function () {
  it('should return 200', function (done) {
    
    http.get('http://localhost:8082', function (res) {
        this.timeout(5000); 
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('should say "Hello, world"', function (done) {
    http.get('http://localhost:8082', function (res) {
      var data = '';

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        var n = data.indexOf("Hello world");
        assert(n > 0);
        done();
      });
    });
  });
});


