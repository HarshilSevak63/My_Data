// Create a program to print 3 messages in reverse order in which they are written\

//setTimeout(fat_arrowfunction,time_delay);

// setTimeout(()=> console.log('Hello World'),2000);
// setTimeout(()=> console.log('Hello Universe'),1000);
// console.log('Good Bye')

// Write js code and create a ES-6 function that adds 2 numbers which are incremented every 1 second and their output is displayed.

// function f(a,b){
//     console.log(a++);
//     console.log(b++);
// }

function add(a,b){console.log(a+b);
    a++;
    b++;
setTimeout(()=>add(a,b),1000);
}
setTimeout(()=>add(5,10),1000);