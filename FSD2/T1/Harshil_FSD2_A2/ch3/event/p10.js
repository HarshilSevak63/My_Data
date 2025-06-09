const e=require('events');
const ee=new e();
function print1(){
    console.log('Hello! Surya bhai!');
}
ee.on('hello',print1);
ee.on('hi',print1);
console.log(ee.listenerCount('hello'));
console.log(ee.listenerCount('hi'));
ee.emit('hello');
ee.emit('hi');
console.log();
ee.removeListener('hi',print1);
ee.emit('hello');
console.log(ee.listenerCount('hello'));
console.log(ee.listenerCount('hi'));


