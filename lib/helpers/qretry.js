'use strict';

var Q = require('q');
var DEFAULT_OPTIONS = {
  maxRetry: 5,
  interval: 500,
  intervalMultiplicator: 1.5
};

module.exports = function Qretry(action, options) {
  if (typeof action !== 'function') {
    throw new Error('Qretry: action must be a function');
  }

  if (!options) {
    options = DEFAULT_OPTIONS;
  } else {
    for (var k in DEFAULT_OPTIONS) {
      if (DEFAULT_OPTIONS.hasOwnProperty(k) && !(k in options)) {
        options[k] = DEFAULT_OPTIONS[k];
      }
    }
  }

  // Recursive resolver
  function resolver (remainingTry, interval) {
    var result = Q.fcall(action);
    if (remainingTry <= 0) {
      return result;
    }
    // In case of failure, wait the interval, retry the action
    return result.fail(function() {
      return Q.delay(interval).then(function() {
        return resolver(remainingTry-1, interval*options.intervalMultiplicator);
      });
    });
  }

  return resolver(options.maxRetry, options.interval);
};
