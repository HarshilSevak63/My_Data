function add(a,b,cb){
    var sum=a+b;
    cb(sum)
}
function mul(a,b,cb){
    var mul=a*b;
    cb(mul)
}
function display(a){
    console.log(a);
}
add(1,2,display)
mul(2,2,display)