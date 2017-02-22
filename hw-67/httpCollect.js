'use strict';

const http = require('http');
let string = '';
   http.get(process.argv[2],function callback (response){
       response.setEncoding('utf-8');
    response.on("error", console.log);
    response.on("data",(data)=>{
        string += data;
    });
    response.on('end',()=>{
        console.log(string.length);
        console.log(string);
    });
});