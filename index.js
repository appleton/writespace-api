'use strict';

var http = require('http');
var app = require('./server');

if (process.env.NODE_ENV === 'production') {
  require('newrelic');
  http.globalAgent.maxSockets = 20;
}

// Start the server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
