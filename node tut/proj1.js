const url = require("url")
const http = require("http")
const fs = require("fs")

http.createServer((req,res)=>{

    const path = req.url;

    if(path == "/about"){
        console.log("about page")

        res.writeHead(200,{"content-type":"text/html"})
        const filecontent =   fs.readFileSync("./views/about.html")
          res.write(filecontent) 
          res.end();
  
    }else if(path == "/"){
        console.log("home page")
        
        res.writeHead(200,{"content-type":"text/html"})
      const filecontent =   fs.readFileSync("./views/home.html")
        res.write(filecontent) 
        res.end();

          


    }else if(path == "/service"){
        console.log("service page")

        res.writeHead(200,{"content-type":"text/html"})
        const filecontent =   fs.readFileSync("./views/service.html")
          res.write(filecontent) 
          res.end();
  
    }
}).listen(8082)