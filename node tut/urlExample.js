const http  = require("http");
const url  = require("url");

//urlParse()

http
   .createServer((request,response)=>{
     console.log(request.url)

     const urlOb = url.parse(request.url,true) // value ko string mein krne ke liye true krra
     console.log(urlOb)

     console.log(urlOb.query.keywords)
   }).listen(8082)