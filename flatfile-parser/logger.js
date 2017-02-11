'use strict';

const log4js = require('log4js');
const logPath = process.env.HOME.concat('/data/logs/');

log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: logPath + '/parser.log', category: 'Parser' }
  ]
});

let logger = log4js.getLogger('Parser');

module.exports = logger;