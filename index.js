const http = require('http');
const app  = require('./server');
const PORT = process.env.PORT || 1337;

if (process.env.NODE_ENV === 'production') {
  http.globalAgent.maxSockets = 20;
}

// Start the server
http.createServer(app).listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
});
