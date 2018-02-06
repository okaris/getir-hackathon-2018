const restify = require('restify');

var mainController = require('./controllers');

var server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.get('/', (req, res, next) => {
  res.send('Hi! I am running :)');
});

server.post('/', mainController.home);
server.post('/searchRecord', mainController.home);

var port = process.env.PORT || 8080;
server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});
