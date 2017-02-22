'use strict';

const fs = require('fs');

const folder = fs.readdir(process.argv[2],(err,list)=>{
    let newList = list.filter((elem)=>{
        if(elem != process.argv[3] && elem.substring(elem.length - (process.argv[3].length))=== process.argv[3])
        return elem;
    });
    newList.forEach((elem)=>{
        console.log(elem);
    });
});