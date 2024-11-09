//http
const http  =  require("http")

const server = http.createServer((req,res)=>{
    //req: request process
    //res: for writing response
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1> Wow this is response for first server  </h1>")
    res.write("<h2> ok nice work </h2>")
    res.write("<button> click me </button>")
    res.end("ok byby")
})
server.listen(9898)