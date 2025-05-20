// In get method data is appended in url. 


const express=require('express');
const app=express();

app.use(express.static(__dirname,{'index':'myform.html'}));
app.get('/submit-form',(req,res)=>{
    var data=req.query;
    // res.send(data);

// res.send(`<table border=5>
//             <tr>
//                 <td>Detail</td>
//                 <td>Value</td>
//             </tr>
//             <tr>
//             <td>First Name</td>
//             <td>${data.fname}</td>
//             </tr>
//             <tr>
//             <td>Last Name</td>
//             <td>${data.lname}</td>
//             </tr>
//             <tr>
//             <td>Gender</td>
//             <td>${data.gender}</td>
//             </tr>
//             <tr>
//             <td>Hobbies</td>
//             <td>${data.hobbies[0]}</td>
//             </tr>
//              <tr>
//             <td>City</td>
//             <td>${data.city}</td>
//             </tr>
//             <tr>
//             <td>Address</td>
//             <td>${data.address}</td>
//             </tr>
//           </table>`);

// Fetch data from text area.Display it in seperate line after each , and make each line bold.
var x="";
var a=data.address.split(',');

for (i of a){
    x+=`<b>${i}</b><br>`;
}

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
            <td>${x}</td>
            </tr>
          </table>`);

});


app.listen(4142,()=>console.log('Listening at http://localhost:4142'));