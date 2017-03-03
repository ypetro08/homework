'use strict';


const http = require('http'),
    fs = require('fs'),
    path = require('path');
    
module.exports = function(request, response, next) {

    fs.readFile('./' + request.url, 'utf-8',(err,data) => {
    if(err){
            if(err.code === 'ENOENT'){
                response.statusCode = 404;
                response.write('No such page GO TO SLEEP');
            }else{
                response.statusCode = 500;
            }
            response.end(err.message);
            return;
    }
    response.end(data);
});
//next();
};
