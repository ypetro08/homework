const fs = require('fs');

fs.readFile('nodeHw.js', (err, data)=>{
    if(err){
        console.error('Error');
    }else{
        let newData = '';
        for(let i = data.toString().length-1; i >= 0 ; i--){
            newData+=data.toString().charAt(i);
        }
        console.log(newData);
    }
});

const event = require('events'),
      eventEmitter = new event.EventEmitter();

      eventEmitter.on('second', ()=>{
          console.log(new Date().toTimeString());
      });

      setInterval(()=>{
        eventEmitter.emit('second');
      },1000);