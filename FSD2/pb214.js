// Create a form with name,email and rating(bad,avg,good,very good,excellent).
// When user submit's form store their details in a single cookie feedback.
// Display conformation message(You submitted feedback click below).
// Create a feedback link that shows feedback information from the cookie.
// Create a link for logout that taks you to home page.
const cp = require('cookie-parser');
const express=require('express');
const app=express();
app.use(cp());
app.use(express.static(__dirname,{'index':'pb214.html'}));

app.use(express.urlencoded({'extended':false}));

app.post('/submit',(req,res,next)=>{
    var data=req.body;
    var fname=data.name;
    var email=data.email;
    var message=data.message;
    var rating=data.rating;
    var feedback={fname,email,message,rating};

    res.cookie('feedback',feedback);
    next();
});

app.post('/submit',(req,res)=>{
    res.set('Content-Type','text/html');
    res.write(`<h2>You submitted feedback click below</h2>`);
    res.write(`<button><a href='/show-data'>View-Data</a></button>`);
    res.end();
});

app.get('/show-data',(req,res)=>{
    var d=req.cookies.feedback;
    res.set('Content-Type','text/html');
    res.clearCookie('feedback');
    res.write(`<h2>First Name: ${d.fname}</h2>`);
    res.write(`<h2>Email: ${d.email}</h2>`);
    res.write(`<h2>Message: ${d.message}</h2>`);
    res.write(`<h2>Feedback: ${d.rating}</h2>`);
    res.write(`<button><a href='/'>Logout</a></button>`);
    res.end();
});

app.listen(5100,()=>console.log('Listening at http://localhost:5100'));