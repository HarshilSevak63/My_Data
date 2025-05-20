const express=require('express');
const  app=express();

// -------------------Static-Routing---------------------

app.get('/',(req,res)=>{
    res.send(`<h2 style='color:blue'>Hello World from Home Page </h2>`);
});
app.get('/about',(req,res)=>{
    res.send(`<h2 style='color:red'>Hello World from About Page </h2>`);
});
app.get('/contect',(req,res)=>{
    res.send(`<h2 style='color:black'>Hello World from Contect Page </h2>`);
});

app.listen(5001,()=> console.log('Listening at http://localhost:5001'));