// es5, node-modules

// dbConfig.js
module.exports = {
    port: 4545,
    host: '127.0.0.1'
}


var configObj = require('./dbConfig')


// es6
export var port = 4545;
export var host = 'localhost';

import * as config from "./"