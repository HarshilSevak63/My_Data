const express=require('express');
const app=express();

const cp = require('cookie-parser');
app.use(cp());

const sess=require('express-session');
app.use(sess({secret:'abc',saveUninitialized:false,resave:false,cookie:{maxage:50000}}));

app.get('/',(req,res)=>{
    if(req.session.views>=1){
        if(req.session.views>6){
            req.session.destroy();
            res.send(`<h1 style='color:red''>Session Destroied</h1>`);
        }
        else{
            req.session.views++;
            res.send(`<h1>You visited this page ${req.session.views} Times!</h1>`);
        }
    }
    else{
        req.session.views=1;
        res.send(`<h1>You visited this page 1st Time!</h1>`);
    }
});

app.listen(5200,()=>console.log('Listening at http://localhost:5200'));
