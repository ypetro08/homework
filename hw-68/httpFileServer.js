'use strict';

const http = require('http'),
        fs = require('fs');

var server = http.createServer((request, response)=>{
    fs.createReadStream(process.argv[3]).pipe(response);
}).listen(process.argv[2]);