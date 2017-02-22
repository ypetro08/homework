'use strict';

const http = require('http');
   http.get(process.argv[2],function callback (response){
       response.setEncoding('utf-8');
    response.on("error", console.log);
    response.on("data",console.log);
});