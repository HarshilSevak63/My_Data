// From the given url redirect to required html page if it exists else display client error.
const fs=require('fs');
const http=require('http');
const url=require('url');

http.createServer((req,res)=>{
    var p=url.parse(req.url);
    if(p.pathname=="/home.html" || p.pathname=="/about.html" || p.pathname=="/contact.html"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(fs.readFileSync("."+p.pathname),'utf-8');
        res.end();
    }
    else if(p.pathname=='/'){
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1 style="color:red">error </h1>');
        res.end();
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1 style="color:red"> Client error </h1>');
        res.end();
    }
}).listen(5050,()=>{console.log('Listening to port 5050....')});