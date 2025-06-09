const os=require('os');

console.log('arch:'+os.arch());
console.log('platform:'+os.platform());
console.log('host:'+os.hostname());
console.log('Temporery dir:'+os.tmpdir());
console.log('Free Memory in Gb:'+os.freemem()/1024/1024/1024);
console.log('Total Memory in Gb:'+os.totalmem()/1024/1024/1024);

// Create a folder aa in temp dir.If available memory is > 1Gb write in a text file of this folder-Memory Sufficient.
// Else write-insufficient memory.

const fs= require('fs');
var t=os.tmpdir();
var free=os.freemem()/1024/1024/1024;
fs.mkdirSync(t+"/AA");
if(free>1){
    fs.writeFileSync(t+"/AA/b.txt","folder-Memory Sufficient");
}
else{
    fs.writeFileSync(t+"/AA/b.txt","folder-Memory Insufficient");
}
console.log(fs.readFileSync(t+"/AA/b.txt",'utf-8'));