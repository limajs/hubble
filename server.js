var Hapi = require('hapi');
var server = new Hapi.Server();

var getHelloWorld = function (request, reply) {
  return reply('hello world');
};

server.connection({ 
  port: 8002 
});


server.route({
  method: 'GET',
  path:'/', 
  handler: getHelloWorld 
});

server.start(function(err){
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});



