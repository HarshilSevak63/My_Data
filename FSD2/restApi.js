const express=require('express');
const app=express();

const students=[{id:101,name:'Harshil',branch:'CE',city:'Ahmedabad',gender:'Male'},
                {id:102,name:'Priya',branch:'IT',city:'Vadodara',gender:'Female'},
                {id:103,name:'Rohan',branch:'CE',city:'Surat',gender:'Male'},
                {id:104,name:'Sneha',branch:'CE',city:'Rajkot',gender:'Female'},
                {id:105,name:'Amit',branch:'CSE',city:'Bhavnagar',gender:'Male'},
                {id:106,name:'Divya',branch:'IT',city:'Gandhinagar',gender:'Female'},
                {id:107,name:'Kunal',branch:'IT',city:'Junagadh',gender:'Male'},
                {id:108,name:'Shweta',branch:'CE',city:'Jamnagar',gender:'Female'},
                {id:109,name:'Vikram',branch:'CSE',city:'Anand',gender:'Male'},
                {id:110,name:'Neha',branch:'CSE',city:'Nadiad',gender:'Female'},
                {id:111,name:'Parth',branch:'CE',city:'Mehsana',gender:'Male'},
                {id:112,name:'Aarti',branch:'IT',city:'Morbi',gender:'Female'},
                {id:113,name:'Jay',branch:'CSE',city:'Surendranagar',gender:'Male'},
                {id:114,name:'Pooja',branch:'IT',city:'Bharuch',gender:'Female'},
                {id:115,name:'Sagar',branch:'CSE',city:'Valsad',gender:'Male'}
];

app.get('/',(req,res)=>{
    res.set('Content-Type','text/html');
    res.write(`<table border=2 style="width:100%; border-collapse: collapse;">
                <tr style="background-color:skyblue;">
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">ID</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Name</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Branch</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">City</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Gender</th>
                </tr>`);
    for (s of students) {
        res.write(`<tr style="border: 1px solid #ddd;">
                        <td style="padding: 8px;">${s.id}</td>
                        <td style="padding: 8px;">${s.name}</td>
                        <td style="padding: 8px;">${s.branch}</td>
                        <td style="padding: 8px;">${s.city}</td>
                        <td style="padding: 8px;">${s.gender}</td>
                    </tr>`);
    }
    res.end(`</table>`);
    });

app.get('/id/:i',(req,res)=>{
    var cd=students.filter((s)=>(s.id==req.params.i));
    if (cd.length>0){
        res.send(cd);
    }
    else{
        res.send(`<h1 'color:red'>No such data found</h1>`);
    }
});

app.get('/branch/:b',(req,res)=>{
    var cd=students.filter((s)=>(s.branch==req.params.b));
    if (cd.length>0){
        res.send(cd);
    }
    else{
        res.send(`<h1 'color:red'>No such data found</h1>`);
    }
});

app.get('/branch/:b/city/:c',(req,res)=>{
    var cd=students.filter((s)=>( s.branch.toLowerCase() == req.params.b.toLowerCase()  &&  s.city.toLowerCase() == req.params.c.toLowerCase() ));
    if (cd.length>0){
        res.send(cd);
    }
    else{
        res.send(`<h1 'color:red'>No such data found</h1>`);
    }
});

app.get('/:id([0-9]{3})',(req,res)=>{
    var cd=students.filter((s)=>(s.id==req.params.id));
    if (cd.length>0){
        res.send(cd);
    }
    else{
        res.send(`<h1 'color:red'>No such data found</h1>`);
    }
});
// or
// app.get('/:id',(req,res)=>{
//     students.filter((s)=>{
//         var r=/[0-9]{3}/;
//         if(r.test(s.id)){
//             return s.id;
//         }
//         else{
//             res.send(`<h1 'color:red'>No such data found</h1>`);
//         }
//     })
// });

app.listen(300,()=>{
    console.log("http://localhost:300");

});