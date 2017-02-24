'use strict';

const http = require('http'),
        fs = require('fs'),
        map = require('through2-map');


 var server = http.createServer((request, response)=>{
     request.pipe(map(function (chunk) {
       return chunk.toString().toUpperCase();
     })).pipe(response);
}).listen(process.argv[2]);     