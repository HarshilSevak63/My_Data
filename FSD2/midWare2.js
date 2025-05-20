// 1. create an Html file with name and email id text feilds and a check box subscribe.
// 2. Use middelwares to satisfy following
// a. If user has checked subscribe,on the root /login display message thank you for subscription.
// b. Create a logout button that redirects you to home page.
// c. If it is not checked on the same path write you can subscribe for daily updates by clicking below.
// d. Create subscribe button which when clicked goes to root/subscribe.
// e. on subscribe root display thank you message and log out button.

const express=require('express');
const app=express();

app.use(express.static(__dirname,{'index':'midware2.html'}));

app.use(express.urlencoded({'extended':false}));

app.post('/login',(req,res,next)=>{
    res.set('Content-Type','text/html');
    next();
});

app.post('/login',(req,res,next)=>{
    var data=req.body;
    res.write(`<h2>Welcome ${data.name}... Your email ${data.email}</h2>`);
    next();
});

app.post('/login',(req,res)=>{
    var data=req.body;
    if (data.subscribe=='yes'){
        res.write(`<h2>Thank you for subscription</h2>`);
        res.write(`<button><a href='/'>Logout</a></button>`);
    }
    else{
        res.write(`<h2>You can subscribe for daily updates by clicking below</h2>`);
        res.write(`<button><a href='/subscribe'>Subscribe</a></button>`);
    }
    res.send();
});

app.get('/subscribe',(req,res)=>{
    res.write(`<h1>Thank you...</h1>`);
    res.write(`<button><a href='/'>Logout</a></button>`);
    res.send();
});

app.listen(2000,()=>console.log('Listening at http://localhost:2000'));