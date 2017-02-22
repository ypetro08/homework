'use strict';

const fs = require('fs');

const fileContents = fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err) {
        console.log('Please pass a file');
    } else {
        console.log(data.split('\n').length - 1);
    }

});
