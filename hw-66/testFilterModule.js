'use strict';

const mf = require('./moduleFilter');

mf(process.argv[2], process.argv[3], (err, files)=> {
    if(err){
       return console.error(err);

    }
    files.forEach(f => console.log(f));
});
