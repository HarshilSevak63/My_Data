// Create a js file to copy contents from 1 txt file to other.
const fs= require('fs');
var x=fs.readFileSync("num.txt",'utf-8');
fs.writeFileSync("copyp6.txt",x);