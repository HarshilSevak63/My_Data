const path=require('path');
var s="D://Harshil_FSD2_A2//ch2//a.jpg";
console.log(path.dirname(s));
console.log(path.basename(s));
console.log(path.extname(s));
var p=path.parse(s);
console.log(p);

// Check whether a given file is an img(png,jpg,jif) or not.
if((path.extname(s)==".png") | (path.extname(s)==".jpg") | (path.extname(s)==".jif")){
    console.log('is image');
}
else{
    console.log('not an image')
}
