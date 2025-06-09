const url=require('url');
var myUrl="http://localhost:80/abc/test/home.html?name=harshil&age=20#section1";
// -->Output JSON formate
var parseurl=url.parse(myUrl,true);
// -->Output String formate
// var parseurl=url.parse(myUrl,false)
console.log(parseurl);

// Print in console the value in query string
var q=parseurl.query;
console.log(q.name+' is of age '+q.age)