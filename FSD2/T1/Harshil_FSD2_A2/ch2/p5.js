// Create a file having space seperated numbers,read the file,sort number in accending order,write in file sorted.txt.
const fs= require('fs');
fs.writeFileSync("num.txt","1 20 35 4 55 6 70 83 9");
var x=fs.readFileSync('num.txt','utf-8');
var ar=x.split(" ");
// If array has all single,double digit then write ar.sort()
console.log("Unsorted String Array:");
console.log(ar);
var temp=[];
for(i of ar){
    p=parseInt(i);
    temp.push(p);
}
console.log("New Integer Array:");
console.log(temp);
var sa=temp.sort((a,b)=>b-a);
console.log("Sorted Array:"+sa);
fs.writeFileSync("sorted.txt",sa.toString());