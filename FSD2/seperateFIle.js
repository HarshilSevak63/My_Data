const path=require('path');
const express=require('express');
const app=express();
console.log(__dirname);

var htmlp=path.join(__dirname,"../html");
console.log(htmlp);
var cssp=path.join(__dirname,"../css");
console.log(cssp);
var imgp=path.join(__dirname,"../img");
console.log(imgp);


app.use(express.static(htmlp));
app.use(express.static(cssp));
app.use(express.static(imgp));

app.get('/',(req,res)=>{
    res.sendFile(htmlp+'/home.html');
    res.sendFile(cssp+'/mystyle.css');
});

app.get('/about',(req,res)=>{
    res.sendFile(htmlp+"/about.html");
    res.sendFile(cssp+'/mystyle.css');

});

app.get('/css',(req,res)=>{
    res.sendFile(cssp+"/mystyle.css");
});

app.get('/img',(req,res)=>{
    res.sendFile(imgp+"/h.jpg");
});

app.listen(5128,console.log('listining at http://localhost:5128'));