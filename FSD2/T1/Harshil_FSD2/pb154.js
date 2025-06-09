// WAS to fetch values from given url and print it in file as per given format.
// Read the file and display same data in your server home page in same format but in h1 tag and red color.
// Any other request gives error.
// File name must be taken from url.
const http=require('http');
const url=require('url');
const fs=require('fs');
var u="https://www/google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest";
var u1=url.parse(u,true);
var f=u1.pathname;// /exam.txt
var q=u1.query;
var h=u1.hash;
fs.writeFileSync('.'+f,q.c1+'!\n'+q.c3+q.c2+'\n'+h);
data=fs.readFileSync('.'+f,'utf-8');
data=data.replace('/\n/g','<br>');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write("<h1>"+data+"</h1>");
    res.end();
}).listen(3020,console.log('Listening at http://localhost:3020/'));