const cp = require('cookie-parser');
const express=require('express');
const app=express();

app.use(cp());

app.get('/',(req,res)=>{
    res.cookie('fname','Harshil');
    res.cookie('lname','Sevak');
    res.cookie('today','Wednesday',{'expires':new Date(Date.now()+50000)});
    res.cookie('favColor','none',{'maxAge':200000});
    res.clearCookie('lname');
    var c=req.cookies;
    // res.send(JSON.stringify(c));
    res.write('Firstname: '+c.fname+' ');
    res.write('Lastname: '+c.lname+' ');
    res.write('Today: '+c.today+' ');
    res.write('Color: '+c.favcolor+' ');
    res.end();

    
});

app.listen(5000,()=>console.log('Listening at http://localhost:5000'));