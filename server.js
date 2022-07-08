const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/*
EXPRESSjs is all about MIDDLEWARE means the incomming request is automatically passed through several functions in series by express js 

instead of having 1 request handler we can have multiple handlers which the request will go through until a reponse is sent.
*/

// this enable us to use "req.body" to extract the incomming data from the request.
app.use(bodyParser.urlencoded({extended: false}));


// use() allows us to add a new middleware function.
app.get('/add-new-product',(req, res,next)=>{
    console.log('add product');
    res.send('<form action="/add-new-product" method="POST"><input type="text" name="product"><button type="submit">ok</button></form>');
    // next() allows the request to go to the next middleware in line.
});

//unlike use(), thees HTTP verbs like get and post use the exact path matches
app.post('/add-new-product',(req, res,next)=>{
  console.log(`You added ${req.body.product}.`);
  res.redirect('/');
});

app.use('/',(req, res, next)=>{
    console.log('Sent homepage.')
    res.send('<h1>Hello from express</h1>');
});


app.listen(4464);

// the "app" can be passed as the request handler but when calling app.listen() is already performs the logic under the hood 
// const server = http.createServer(app)

// server.listen(4464);
