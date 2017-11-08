const express = require('express');
const router = express.Router();
const logger = require('../logger');
// var winston = require('winston');
// var fs = require("fs");
// const dir = '../log';

// if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir);
// }


// fs.exists('log/access.log', (exists) => {
//   if (exists) {
//     var logger = new (winston.Logger)({
//       transports: [
//         new (winston.transports.File)({
//           level: 'info',
//           filename: 'access.log',
//           json: true
//         })
//       ]
//     });
//   } else {
//     fs.writeFile('../log/access.log', function (err) {
//     });
//   }
// });


// var logger = new (winston.Logger)({
//   transports: [
//     new (winston.transports.File)({
//       filename: 'logs/access.log',
//       json: true
//     })
//   ]
// });

/* GET home page. */
router.get('/', function (req, res, next) {
  logger.log('info', 'Hello distributed log files!');
  logger.log('error', 'Hello distributed log files!');
  logger.log('debug', 'Hello distributed log files!');
  logger.log('verbose', 'Hello distributed log files!');
  logger.log('peeyush', 'Hello distributed log files!');
  res.render('index', { title: 'Express' });
});

module.exports = router;
