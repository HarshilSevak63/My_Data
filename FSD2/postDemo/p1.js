// Create a form with 2 number fields and 1 dropdown list.The dropdown list has 4 operations add,sub,mul,div.
// Create a rout/result that displays the result of selected opearation in green color.If entered numbers are negative or operation is not selected
// proper error must be shown in red color.


const express=require('express');
const app=express();

app.use(express.static(__dirname,{'index':'p1.html'}));

app.use(express.urlencoded({'extended':false}));

app.post('/form',(req,res)=>{
    var data=req.body;
    a=parseInt(data.num1);
    b=parseInt(data.num2);
    c=data.op;

    if((a>0 && b>0)){
        if (c=='add'){
            res.send(`<h1 style='color:green'>Answer is ${a+b}</h1>`);
        }
        else if(c=='sub'){
            res.send(`<h1 style='color:green'>Answer is ${a-b}</h1>`);
        }
        else if(c=='mul'){
            res.send(`<h1 style='color:green'>Answer is ${a*b}</h1>`);
        }
        else if(c=='div'){
            res.send(`<h1 style='color:green'>Answer is ${a%b}</h1>`);
        }
        else{
            res.send(`<h1 style='color:red'>Invalid Operation</h1>`);
        }
    }
    else{
        res.send(`<h1 style='color:red'>Invalid numbers</h1>`);
    }

});


app.listen(4000,()=>console.log('Listening at http://localhost:4000'));