const express = require('express');
const path = require('path');
const rootDir = require('../util/path.js')

const router = express.Router();


// use() allows us to add a new middleware function.
router.get('/add-product',(req, res,next)=>{
    console.log('add product');
    res.sendFile(path.join(rootDir, 'views','add-product.html'));
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'));
    // next() allows the request to go to the next middleware in line.
});

//unlike use(), these HTTP verbs like get and post use the exact path matches
router.post('/add-product',(req, res,next)=>{
  console.log(`You added ${req.body.product}.`);
  res.redirect('/');
});


module.exports = router;
