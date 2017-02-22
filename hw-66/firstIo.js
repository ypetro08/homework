'use strict';

const fs = require('fs');

const fileContents = fs.readFileSync(process.argv[2],'utf-8');
let lineArray = fileContents.split('\n');
console.log(lineArray.length-1);