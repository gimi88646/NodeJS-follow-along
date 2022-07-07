const fs  = require('fs');

const requestHandler = (req,res) => {
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        // redirect the post request to /message..
        // it will automatically put value of the input tag as "message" into the request it sends to the server. 
        var html = '<form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form>'
        res.write(html);
        return res.end();
    }
    // req.method==POST makes sure the redirect URL is sent from the form ,
    // not some user has entered /message, because only then we some data to write
    if(req.url==='/message' && req.method=='POST'){
        // when performing our business logic the response may have already gone
        // if we dont want if we should move res.end() to the event handler
        
        // collect buffer from the request.. buffer contains chunks of data.

        const body = []
        req.on('data',(buffer)=>{
            body.push(buffer);
            console.log(buffer);
            console.log('buffer pushed');
        });

        // once there are no chunks merge chunks and use them wherever you want.
        // "return" makes sure we dont dont execute the code below that is not the part for this route, it just ultimately  
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('test',message,err=>{
            
                // set res status code.
            res.statusCode = 302;        
            // redirect the user to '/'
            res.setHeader('location','/');
            
            return res.end();
            })

            // fs.writeFileSync('test',message);
            // set res status code.
            // res.statusCode = 302;        
            // redirect the user to '/'
            // res.setHeader('location','/');
            // return res.end();
            // alternative for writing headers and status code. headers are case-insentive 
            // res.writeHead(302,{location:'/'}}) 
            
        });
    }
    
    res.setHeader('Content-Type','text/html');
    
    res.write(
        '<html><head><title>Node server</title></head>'+
        '<body><h1>hello from node server</h1></body></html>'
        );
    return res.end();

};

module.exports = requestHandler;