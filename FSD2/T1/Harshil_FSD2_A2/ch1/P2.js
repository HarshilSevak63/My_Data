// P1-> Create a function "listToobject" which converts a given JSON array into an object such that 1st value acts
// as key and 2nd values acts as its value.Print this object in terminal.An example is given to you;
// Eg. Input:[['car1','Mustang'],['car2','BMW'],['car3','AUDI']]
// Output:[{'car1':'Mustang'},{'car2':'BMW'},{'car3':'AUDI'}]

var ab=[['car1','Mustang'],['car2','BMW'],['car3','AUDI']];
function listToobject(a){
    var obj=[];
    for(var i=0;i<a.length;i++){
        var temp={}
        temp[a[i][0]]=a[i][1];
        obj.push(temp);
    }
    return obj;
}
var x=listToobject(ab);
console.log(JSON.stringify(x));

// P2-> Create a function "firstlast" where a JSON array is given as parameterand it returns
// an object such that 1st value of array is key and last element of array is its value.

// var input=["abc","pqr","def","xyz"];
// function firstlast(a){
//     var o={};
//     o[a[0]]=a[a.length-1];
//     return o;
// }
// var b=firstlast(input);
// console.log(JSON.stringify(b));
