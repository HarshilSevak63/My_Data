// In this format data is send by appending it to body tag and it is encoded.
// It is used when one don't want to show some info to url. 


const express=require('express');
const app=express();

app.use(express.static(__dirname,{'index':'myform.html'}));

// You need to use a new middlleware to get post data
app.use(express.urlencoded({'extended':false}));

app.post('/submit-form',(req,res)=>{
    var data=req.body;

    // res.send(data);

    res.send(`<table border=5>
                    <tr>
                        <td>Detail</td>
                        <td>Value</td>
                    </tr>
                    <tr>
                    <td>First Name</td>
                    <td>${data.fname}</td>
                    </tr>
                    <tr>
                    <td>Last Name</td>
                    <td>${data.lname}</td>
                    </tr>
                    <tr>
                    <td>Gender</td>
                    <td>${data.gender}</td>
                    </tr>
                    <tr>
                    <td>Hobbies</td>
                    <td>${data.hobbies[0]}</td>
                    </tr>
                     <tr>
                    <td>City</td>
                    <td>${data.city}</td>
                    </tr>
                    <tr>
                    <td>Address</td>
                    <td>${data.address}</td>
                    </tr>
                  </table>`);

});


app.listen(4143,()=>console.log('Listening at http://localhost:4143'));