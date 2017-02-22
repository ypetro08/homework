'use strict';

const http = require('http');
let url1 = '',
    url2 = '',
    url3 = '',
    counter = 0;

    function printResults(){
        console.log(url1);
        console.log(url2);
        console.log(url3);
    }

http.get(process.argv[2], function callback(response) {
    response.setEncoding('utf-8');
    response.on("error", console.log);
    response.on("data", (data) => {
        url1 += data;
    });
    response.on('end', () => {
        counter++;
        if(counter === 3){
        printResults();
    }
    });
    
});

http.get(process.argv[3], function callback(response) {
    response.setEncoding('utf-8');
    response.on("error", console.log);
    response.on("data", (data) => {
        url2 += data;
    });
    response.on('end', () => {
        counter++;
        if(counter === 3){
        printResults();
    }
    });
    
});

http.get(process.argv[4], function callback(response) {
    response.setEncoding('utf-8');
    response.on("error", console.log);
    response.on("data", (data) => {
        url3 += data;
    });
    response.on('end', () => {
        counter++;
        if(counter === 3){
        printResults();
    }
    });
    
});