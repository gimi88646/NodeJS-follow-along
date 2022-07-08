const express = require('express');
const bodyParser = require('body-parser');
const adminExports = require('./routes/admin');
const shop = require('./routes/shop');
const path = require('path');
const app = express();

const admin = adminExports.router

// telling the express to use pug as templating engine.
app.set('view engine','pug');
// default is already /views directory I'm just explicitly setting it.
app.set('views','views' )

/*
EXPRESSjs is all about MIDDLEWARE means the incomming request is automatically passed through several functions in series by express js 

instead of having 1 request handler we can have multiple handlers which the request will go through until a reponse is sent.
*/

// though we are using "req.body" in the routes, parsing of the "request" can be done here, because every request goes through this middleware.
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')));


// even though we have used HTTP verb to handle request, still the order of the routes should be considered. in case, we want to use() method in future.
app.use('/admin',admin); // take the common path of the routes for admin. now every page related to the admin must be requested as "/admin/add-product" for instance.
app.use(shop);

// if the request doesnt find any path match it gets matched with '/' in this case we send 404 error page.
// response's content type is "text/html" by default
app.use((req,res,next)=>{ 
  res.status(404).render('404',{pageTitle:"page not found"})
  //res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(4464);

// the "app" can be passed as the request handler but when calling app.listen() is already performs the logic under the hood 
// const server = http.createServer(app)

// server.listen(4464);
