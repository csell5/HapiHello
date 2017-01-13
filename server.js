'use strict';

const Hapi = require('hapi');
const Inert = require('inert');

var server = new Hapi.Server();

server.connection({
  port: Number(process.env.PORT || 8000)
});


server.register(Inert);
server.route(require('./routes')());

server.start(function(err) {
  if (err) {
    throw err;
  }

  console.log('Server running at:', server.info.uri);
});
