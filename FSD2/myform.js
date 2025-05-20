const express=require('express');
const app=express();


app.set('viewengine','pug');
app.set('views',__dirname);
app.use(express.urlencoded({'extended':false}));

app.get('/',(req,res)=>{
    res.render('myform.pug');
})
app.post('/login',(req,res)=>{
    data=req.body;
    res.send(`<h1>Use-Name: ${data.uname}</h1><h1>Email: ${data.mail}</h1><a href='/show'>Show from link</a>`);
});

app.get('/show',(req,res)=>{
    res.render('show.pug',{usern:data.uname,emailId:data.mail});
});
app.listen(4100,()=>console.log('Listening at http://localhost:4100'));