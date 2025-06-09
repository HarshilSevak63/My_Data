// 1.
// print=()=>console.log('Hello world');
// add=(a,b)=>console.log('Addition:'+(a+b));
// sub=(a,b)=>console.log('Subtraction:'+(a-b));
// function print(){
//     console.log("hello world");
// }
// module.exports.p=print;
// module.exports.a=add;
// module.exports.s=sub;

// 4.
// module.exports={print,add,sub};

// 5.
// exports.print=()=>console.log('Hello world');
exports.print=function(){console.log('Hello world')};
exports.add=(a,b)=>console.log('Addition:'+(a+b));
exports.sub=(a,b)=>console.log('Subtraction:'+(a-b));