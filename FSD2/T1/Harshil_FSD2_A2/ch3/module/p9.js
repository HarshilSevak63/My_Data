// Write a script to create your own module that checks if given no is prime or not.
// Use this in your program to print in terminal no from 2 to 50 is prime or not.
const {checkPrime}=require('./p9_module.js');

for(i=2;i<=50;i++){
    if(checkPrime(i)){
        console.log(i+' is prime');
    }
    else{
        console.log(i+' is not prime');
    }
}

console.log(__filename);
console.log(__dirname);
