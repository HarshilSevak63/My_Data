const express=require('express');
var app=express();

var student={'name':'Harshil','rollno':68,'marks':'21'};

app.get("/",(req,res)=>{
    res.set('Content-Type','application/json');
    // res.write(JSON.stringify(student)+"\n");
    res.write("name:"+student.name+"\nrollno:"+student.rollno);

    res.write(student.name);
    res.write(student.rollno+" ");

    // In this type you have to call seperate values of object
    // res.set('Content-Type','text/plain');
    // res.write(student.toString());
    res.end();
});

app.get("/j1",(req,res)=>{
    // res.send(student);
    // res.send(student.rollno);
    // Gives invalid status code error because int is passed which is treated as status code.

    res.send(student.rollno+" ");

})

app.get("/j2",(req,res)=>{
    // res.json(student);
    res.json(student.rollno);


})
app.listen(5125,()=>console.log('listining at http://localhost:5125/j2'));

