//get dependencies 
const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

var cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

//settiamo la risposta api
app.get('/api', (req, res) =>{
    res.send('api works!');
});

//prendiamo tutti i percorsi e fare il return del file index
app.get('*', (req,res) => {
    res.send('app works!');
    //res.sendfile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => {console.log('example app listening on port 3000!')})

