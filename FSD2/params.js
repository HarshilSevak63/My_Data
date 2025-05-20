const express=require('express');
const  app=express();

// -------------------Dynamic-Routing---------------------

app.get('/:facname',(req,res)=>{
    res.send(`Welcome to website faculty "${req.params.facname}"`);
});

// ------------------Static-Dynamic-Routing-------------------
app.get('/:facname/sub/:s',(req,res)=>{
    res.send(`Welcome to website faculty "${req.params.facname}" you teach ${req.params.s}`);
});

app.get('*',(req,res)=>{
    res.status(404).send(`<h2 style='color:red'>404 Page not Found </h2>`);
});

app.listen(5002,()=> console.log('Listening at http://localhost:5002/DPB/sub/FSD-2'));