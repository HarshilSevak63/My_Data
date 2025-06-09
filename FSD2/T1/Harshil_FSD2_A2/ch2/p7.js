// write a script to read a simple html file using server.
const fs=require('fs');
const http=require('http');
var myServar=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(fs.readFileSync('Home.html','utf-8'));
        res.end('Last Line');
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1 style="color:red"> Page nahi mila re baba!Kal Ana </h1>');
        res.end();
    }
});
myServar.listen(5001);
console.log('Listening to port 5001....');