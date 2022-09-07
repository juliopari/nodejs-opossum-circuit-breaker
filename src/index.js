
var express = require('express');
const { PORT } = require('./config');
const routes  = require('./routes');
var app = express();

app.use(express.json())

app.use('/api/v1',routes)

app.listen(PORT,()=>{
    console.log(`server listen on port : ${PORT}`)
})


module.exports = app;