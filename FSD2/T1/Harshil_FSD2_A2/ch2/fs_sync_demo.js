// 1. make folder
// 2. write file(create file if not exist)
// 3. append file(create file if not exist)
// 4. read file
// 5. rename file
// 6. delete File
// 7. delete folder(only if it is empty)
const fs= require('fs');
// 1
// fs.mkdirSync("test");

// fs.mkdirSync("abc/test",{recursive:true});

// fs.mkdirSync('D://HARSHIL_FSD2_A2//ch2//test');

// 2.
// fs.writeFileSync("test//a.txt","This is some text\n");

// fs.appendFileSync('test//a.txt','Hello world-added text\n');

// Reading a file with buffer
// console.log(fs.readFileSync('test//a.txt').toString());

// Reading a file without using buffer
// console.log(fs.readFileSync("test//a.txt",'utf-8'));

// Rename a file
// fs.renameSync("test//a.txt",'test//change.txt');

// Delete a file in a folder
// fs.unlinkSync('test//change.txt');

// Delete a folder
// fs.rmdirSync('test');
