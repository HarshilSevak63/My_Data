const e=require('events');

const ee=new e();
// Name event & register listener
// Method1(prefered)
ee.on('hello',print);
function print(){
    console.log('Hello! Surya bhai!');
}
// Method2
// ee.on('hello',()=>{ console.log('Hello bhai!'); });

// Trigger the Event
ee.emit('hello');

