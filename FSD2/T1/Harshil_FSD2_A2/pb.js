// WAS to write the given JSON obj into a file a.txt.
// Read this file and print employee id from the data.
// Also write this obj on index page of your server.
const fs=require('fs');
const http=require('http');
faculty={'name':'xyz','EmpID':241,'isFaculty':true};
var s=JSON.stringify(faculty);
fs.writeFileSync('a.txt',s);
var data=fs.readFileSync('a.txt','utf-8');
var d=JSON.parse(data);
console.log('EmpID is:'+d.EmpID);
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/JSON'});
    res.write(s);
    res.end();
}).listen(3000,()=>console.log('Listening to http://localhost:3000'));