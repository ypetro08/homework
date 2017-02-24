'use strict';


const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript'
    };
let cache = {};


var server = http.createServer((request, response) => {

    const ext = path.extname(request.url);
    if (ext && contentType[ext]) {
        response.setHeader('Content-type', contentType[ext]);
    }

    response.setHeader('X-Powered-By', 'PCS');

    if (cache[request.url]) {
        console.log('serving from cache');
        cache[request.url].accessed = new Date();
        response.end(cache[request.url].data);
    } else {
        console.log('serving from disk');
        fs.readFile('content/' + request.url, 'utf-8', (err, data) => {

            if (err) {
                if (err.code === 'ENOENT') {
                    response.statusCode = 404;
                    response.write('No such page GO TO SLEEP');
                } else {
                    response.statusCode = 500;
                }
                response.end(err.message);
                return;
            }
            cache[request.url] = {
                accessed: new Date(),
                data: data,
                loaded: new Date()
            };
            response.end(data);
        });
    }
    //response.statusCode = 404;
    //response.write('No such page GO TO SLEEP');
}).listen(80);

setInterval(() => {
    const cutOff = new Date() - 5000;
    Object.keys(cache).forEach(key => {
        if (cache[key].accessed < cutOff) {
            delete cache[key];
            return;
        }
        fs.stat('content/' + key, (err, stats) => {
            if (err) {
                return console.error(err);
            }
            if (stats.ntime > cache[key].loaded) {
            delete cache[key];
        }
        });    
    });
}, 10000);
