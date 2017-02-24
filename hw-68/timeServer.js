'use strict';

const net = require('net'),
  server = net.createServer(function (socket) {
    const date = new Date();
    let year = date.getFullYear(),
      month = date.getMonth(),
      day = date.getDate(),
      hour = date.getHours(),
      minutes = date.getMinutes();
    socket.end(year + '-' + addZero(++month) + '-'+ addZero(day)+ ' ' + addZero(hour) +':'+ addZero(minutes) + '\n');
  }).listen(+process.argv[2]);

  function addZero(number){
    return number < 10 ? '0' + number : number;
  }