const express = require('express');

const path= require('path');
const rootDir = require('../util/path.js')

const router = express.Router();

router.get('/',(req, res, next)=>{
    // _dirname is a global variabel that maintains the paths for this project.
    // from which file it is referenced, it gives the absolute path up to the directory that contains referring. js file.
    //const absPath = path.join(__dirname,'..','views','shop.html')
    res.sendFile(path.join(rootDir,'views','shop.html'));
    
});

module.exports = router;