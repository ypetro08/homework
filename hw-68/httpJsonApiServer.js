'use strict';

const http = require('http'),
    fs = require('fs'),
    url = require('url'),
    printTime = '/api/parsetime',
    printMiliseconds = '/api/unixtime';


var server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    var parsed = url.parse(request.url, true);
    var date = new Date(parsed.query.iso);
    if (parsed.pathname === printTime) {
        let time = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        response.end(JSON.stringify(time));
    } else if (parsed.pathname === printMiliseconds) {
        let unixtime = {
            unixtime: date.getTime()
        };
        response.end(JSON.stringify(unixtime));
    }
}).listen(process.argv[2]);

