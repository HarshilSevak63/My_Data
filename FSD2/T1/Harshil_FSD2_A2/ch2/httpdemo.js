// steps to create server and full-fill request

// 1. Reqire "http" module.
// 2. Create a server (1.Handle request,2.Write head,3.Give response,4.End response)
// 3. Configure your server to listen to a perticular port

const http=require('http');    
                        //(request,response)
var myServar=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('Hello World!');
        res.write('<h2> Good Morning! </h2>');
        res.end('Last Line');
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1 style="color:red"> Page nahi mila re baba!Kal Ana </h1>');
        res.end();
    }
});
myServar.listen(5000);
console.log('Listening to port 5000....');