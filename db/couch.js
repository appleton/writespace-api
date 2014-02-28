var nano = require('nano');
var connection = nano(process.env.COUCH_DB_URL);

module.exports = connection;
