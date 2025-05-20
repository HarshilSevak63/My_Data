const express=require('express');
const app=express();

const router=require('./rout.js');

app.use(router);

app.listen(500,()=>{
    console.log("http://localhost:500");

});