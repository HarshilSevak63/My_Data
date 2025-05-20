const path=require('path');
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    var p=path.join(__dirname,"home.html");
                    // or
    res.sendFile(__dirname+'/home.html');
});

app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html');
});

app.listen(5126,()=>console.log('listining at http://localhost:5126'));