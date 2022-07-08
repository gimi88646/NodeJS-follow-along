const express = require('express');
// const path = require('path');
// const rootDir = require('../util/path.js')

const router = express.Router();

// use() allows us to add a new middleware function.
router.get('/add-product',(req, res,next)=>{
    
    res.render('add-product',{pageTitle:"Add Product",path:"/admin/add-product"});
});

const products = [];

//unlike use(), these HTTP verbs like get and post use the exact path matches
router.post('/add-product',(req, res,next)=>{
  products.push(req.body);
  res.redirect('/');
});


module.exports.router = router;
module.exports.products = products;