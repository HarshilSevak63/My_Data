// Create a pug file with form to upload your cv.
// It must be in pdf formate and must be stored using  fieldname with extention .pdf into a folder upload.

const express=require('express');
const app=express();
const multer=require('multer');

app.set('viewengine','pug');
app.use(express.urlencoded({'extended':false}));

app.get('/',(req,res)=>{
    res.render(__dirname+'/p2.pug');
});

var store=multer.diskStorage({destination:'single',filename:(req,file,cb)=>{
    cb(null,file.fieldname);
}});
var upload=multer({storage:store});
app.post('/upload',upload.single('myfile'),(req,res)=>{
    var f=req.file;
    if(f){
        res.send(`File ${f.originalname} is uploaded`);
    }
    else{
        res.send(`<h1 style="color:red">no file uploaded</h1>`);
    }
});
app.listen(4200,()=>console.log('Listening at http://localhost:4200'));
