// WAS that handles the following events,
// 1 write in a file
// 2 append in a file
// 3 read from file and display in console
// Use async operations but events must occure in given order.

const e=require('events');
const fs=require('fs');

const ee=new e();
ee.on('writef',()=>{
    fs.writeFile('a1.txt','Some text from file\n',(err)=>{
        if(err){
            console.log("Can't write: "+err);
        }
        else{
            console.log('Write successfull!');
            ee.emit('appendf');
        }
    });
});
ee.on('appendf',()=>{
    fs.appendFile('a1.txt','Appended text',(err)=>{
        if(err){
            console.log("Can't append: "+err);
        }
        else{
            console.log('Append successfull!');
            ee.emit('readf');
        }
    });
});
ee.on('readf',()=>{
    fs.readFile('a1.txt','utf-8',(err,data)=>{
        if(err){
            console.log("Can't read: "+err);
        }
        else{
            console.log('Read successfull! \nData:- \n'+data);
            // ee.emit('readf');
        }
    });
});
ee.emit('writef');