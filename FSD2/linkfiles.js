const path=require('path');
const express=require('express');
const app=express();

// app.use(express.static(__dirname));

app.use(express.static(__dirname,{index:'about.html'}));


app.listen(5127,console.log('listining at http://localhost:5127'));