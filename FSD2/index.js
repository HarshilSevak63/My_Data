// Methods of app(express) object

// app.get()=> give responses based on request
// app.post()=> give responses based on request
// app.put()=> upload file on server
// app.delete()=> delete file on server
// app.all()=> it can handel any type of request(get,post,put,delete) from browser

//[host] address of your server on cloud
//[backlog] default '511' request

// app.listen(port,[host],[backlog],[callback]);
//                  
// app.get([route],callback)=>

//---------------Response Methods----------------

// res.set('Content-Type','type);
// res.write(content);
// res.end();

// Insted os above all we can write
// res.send(content);

// res.JSON(JSON object);
// It is used to send JSON respons to browser

// res.sendFile(FilePath);
// res.render(FilePath);

const express=require('express');
const  app=express();
app.get('/',(req,res)=>{
    
    // res.set('Content-Type','text/html');
    // res.write(`<h2 style='color:blue'>Hello World from Express </h2>`);
    // res.end();

    // res.write('Hello');  Gives Cannot set headers after they are sent to the client error
    // res.send(`<h2 style='color:blue'>Hello World from Express </h2>`);

    // res.send(`<h2 style='color:blue'>Hello World from Express </h2>`);
    // res.write('Hello'); Gives write after end error


    res.set('Content-Type','text/html');
    res.write(`<h2 style='color:blue'>Hello World from Express </h2>`);
    res.send();

});

app.listen(5000,()=> console.log('Listening at http://localhost:5000/'));