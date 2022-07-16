const fs = require('fs');
const path = require('path');
//const products = [];
const p = path.join(path.dirname(process.mainModule.filename),'Data','Product.json');

exports.Product = class Product {
    
    constructor(title){
        this.title = title
    }
    
    
    save() {
        
        let products = [];
        fs.readFile(p, (error,fileContent) => {
            if(!error){
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err=>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        fs.readFile(p,(err,fileContent) => {
            if(err) {
                cb([]);                
            }
        cb(JSON.parse(fileContent));
        });
    }
}
