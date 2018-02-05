const restify = require('restify');

var mainController = require('./controllers');

var server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.get('/', (req, res, next) => {
  res.send('Hi! I am running :)');
});

server.post('/', mainController.home);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
