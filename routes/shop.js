const express = require('express');
const {products} = require('./admin')

const path= require('path');
const rootDir = require('../util/path.js')

const router = express.Router();

router.get('/',(req, res, next)=>{
    
    res.render('shop',{products:products,pageTitle:"shop",path:"/"})
    
});

module.exports = router;