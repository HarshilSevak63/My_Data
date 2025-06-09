const http=require('http');
http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>Welcome! to Home Page</h1>');
        res.write('<a href="http://localhost:5020/About">About Us</a>');
        res.write('<a href="http://localhost:5020/Contact">Contact Us</a>');
        res.end();
    }
    else if (req.url=='/About'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>About</h1>');
        res.end();
    }
    else if (req.url=='/Contact'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>Contect</h1>');
        res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.write('<h1>404 not found</h1>');
        res.end();
    }
}).listen(5020,()=>{
    console.log('Server running at http://localhost:5020/');
});