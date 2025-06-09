// 1.
// const mm=require('./mymodule.js');
// mm.p();
// mm.a(10,20);
// mm.s(50,10);

// 2.
// const {p,a,s}=require('./mymodule.js');
// p();
// a(10,20);
// s(50,10);

// 3.
// const {a,s}=require('./mymodule.js');
// p(); // Error
// a(10,20);
// s(50,10);

// 4.
// const {print,add,sub}=require('./mymodule.js');
// print();
// add(10,20);
// sub(50,10);

// 5.
const {print,add,sub}=require('./mymodule.js');
print();
add(10,20);
sub(50,10);