'use strict';
const app = require('connect')(),
server = require('./server');

app.use(require('./server.js'));
app.use('/',(req, res, next)=>{
    res.write('Hello World?');
    res.end();

});

app.listen(80);
