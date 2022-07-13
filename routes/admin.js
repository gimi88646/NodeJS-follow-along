const express = require('express');
const productsController = require('../controllers/products');
// const path = require('path');
// const rootDir = require('../util/path.js')

const router = express.Router();

// use() allows us to add a new middleware function.
router.get('/add-product', productsController.addProductGET
      // (req, res,next)=>{res.render('add-product',{pageTitle:"Add Product",path:"/admin/add-product"});
);


//unlike use(), these HTTP verbs like get and post use the exact path matches
router.post('/add-product',productsController.addProductPOST);


module.exports = router;
