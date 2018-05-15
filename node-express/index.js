const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use('/dishes',dishRouter);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname+ '/public'));



app.get('/dishes/:dishId', (req,res,next) => {
    res.end('will return the dish with dishid :' + req.params.dishId);
});

app.post('/dishes/:dishId', (req,res,next) => {
    res.statusCode = 403;
    res.end('POST operation not supported !!');
});

app.put('/dishes/:dishId', (req,res,next) => {
    res.write('Will update the dish with dishid ' + req.param.dishId);
    res.end('Dish upsated successfully !!');
});

app.delete('/dishes/:dishId', (req,res,next) => {
    res.end('delete the dish with dishid' + req.param.dishId);
});

app.get('/dishes/:dishId', (req, res, next) => {
    res.end('This will display the particular dish with dfishid to u : '+ req.params.dishId);
});

app.post('/dishes/:dishId', (req, res, next) => {
    res.end('Will add the dish : '+ req.body.name + ' With details : '+ req.body.description);
});

app.put('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported');
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('This will delete a particular dishes');
});

app.delete('/dishes', (req, res, next) => {
    res.end('This will delete all the dishes');
});

app.use((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body>This is an express server</body></html>');
});

const server = http.createServer(app);
server.listen(port, hostname, () =>{
console.log(`Server is running at http://${hostname}:${port}`);
});