const {Product} = require('../Models/Product');


const addProductGET = (req, res,next)=>{
    
    res.render('add-product',{
        pageTitle:"Add Product",
        path:"/admin/add-product"});

};

const addProductPOST = (req, res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

  
const getProducts = (req, res, next)=>{
    
    res.render('shop',{
        products:Product.fetchAll(),
        pageTitle:"shop",
        path:"/"});
};

exports.addProductGET = addProductGET
exports.addProductPOST = addProductPOST;
exports.getProducts = getProducts;

