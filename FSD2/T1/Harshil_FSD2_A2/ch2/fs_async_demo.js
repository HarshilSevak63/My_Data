// 1. make folder
// 2. write file(create file if not exist)
// 3. append file(create file if not exist)
// 4. read file
// 5. rename file
// 6. delete File
// 7. delete folder(only if it is empty)
const fs= require('fs');

//type of callback for async functions
cb = (err)=>{if(err){
            console.log('Unsuccessfull!',err);
        }
        else{
            // console.log('write Successfull!');
            console.log('Successfull!');
        }};
// make folder
// fs.mkdir("testa12",cb);

// console.log('hello world');

// fs.mkdir("abc/test",{recursive:true});

// fs.mkdir('D://HARSHIL_FSD2_A2//ch2//test');

// Writing a file
fs.writeFile("testa//b.txt","This is some text dasdaddfadfdasfddasdada",cb);

// function ap(){
//     fs.appendFile('testa//b.txt',"A_2",
//                 (err)=>{
//                     if(err){
//                         console.log('File not appended',err);
//                     }
//                     else{
//                         console.log('File appended');
//                     }
//                 });
// }
// setTimeout(ap,2000);

fs.appendFile('testa//b.txt',"A_2",
        (err)=>{
            if(err){
                console.log('File not appended',err);
            }
            else{
                console.log('File appended');
            }
        });

// Reading a file with buffer
// fs.readFile('testa//b.txt',(err,data)=>{
//                                         if(err){
//                                             console.log('Cannot read file'+err);
//                                         }
//                                         else{
//                                             console.log(data.toString());
//                                         }
//                                         });

// Reading a file without using buffer
fs.readFile("testa//b.txt","utf-8",(err,data)=>{
                                            if(err){
                                                console.log('Cannot read file'+err);
                                            }
                                            else{
                                                console.log(data);
                                            }
                                            });

// Rename a file
// fs.rename("testa//demo.txt",'testa//demor.txt',cb);

// Delete a file in a folder
// fs.unlink('testa//demor.txt',cb);

// Delete a folder(if empty)
// fs.rmdir('testa',cb);
