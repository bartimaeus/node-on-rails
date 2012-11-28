require('coffee-script');

var express = require('express')
  , http = require('http')
  , path = require('path')
  , mincer = require('mincer');

var environment = new mincer.Environment();
environment.appendPath('app/assets/javascripts');
environment.appendPath('app/assets/stylesheets');
environment.appendPath('app/assets/images');
environment.appendPath('vendor/assets/javascripts');
environment.appendPath('vendor/assets/stylesheets');

var app = module.exports = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('test', function(){
  app.set('port', 3001);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.use('/assets', mincer.createServer(environment));
require('./app/controllers/users')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port %d in %s mode',
    app.get('port'), app.get('env'));
});
