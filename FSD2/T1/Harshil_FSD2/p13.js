// Create an event that calls 2 functions,
// 1 prints downloading
// 2 prints sunccessfully downloaded after 5s.
// functions are called in given order only when download event is fired.

const e=require('events');
const fs=require('fs');

const ee=new e();
ee.on('download',()=>{
    console.log('Downloading....');
    setTimeout(()=>{
        console.log('Successfully Downloaded!!!')},5000)
});
ee.emit('download')