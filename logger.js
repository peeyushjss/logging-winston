const winston = require('winston');
const fs = require("fs");

var myCustomLevels = {
  colors: {
    foo: 'blue',
    bar: 'green',
    baz: 'yellow',
    foobar: 'red'
  }
};

var logging = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
      filename: 'logs/access.log',
      json: true
    })
  ]
});

var logger = {

  /**
  The below function is a wrapper function on Winston which takes in request and also logs the
  client request id (x-client-id)
  **/
  log: function (level, msg) {
    logging.log(level, msg);
  }
}

module.exports = logger;