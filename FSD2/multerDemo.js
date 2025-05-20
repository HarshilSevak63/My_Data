const express=require('express');
const app=express();
const multer=require('multer');

app.set('viewengine','pug');
app.use(express.urlencoded({'extended':false}));

app.get('/',(req,res)=>{
    res.render(__dirname+'/multerDemo.pug');
});

var store=multer.diskStorage({destination:'single',filename:(req,file,cb)=>{
    cb(null,file.originalname);
}});
var upload=multer({storage:store,limits:{fileSize:1024*5}});
app.post('/upload',upload.single('myfile'),(req,res)=>{
    var f=req.file;
    if(f){
        res.send(`File ${f.originalname} is uploaded`);
    }
    else{
        res.send(`<h1 style="color:red">no file uploaded</h1>`);
    }
});

var storem=multer.diskStorage({destination:'multiple',filename:(req,file,cb)=>{
    cb(null,file.originalname);
}});
var uploadm=multer({storage:storem});
app.post('/uploadm',uploadm.array('myfilem',5),(req,res)=>{
    var f1=req.files;
    res.set('Content-Type','text/html');
    if(f1.length){
        for(i of f1){
            res.write(`<h1>File ${i.originalname} is uploaded successfully</h1>`);
        }
    }
    else{
        res.write(`<h1 style="color:red">no file uploaded</h1>`);
    }
    res.send();
});
app.listen(4200,()=>console.log('Listening at http://localhost:4200'));
