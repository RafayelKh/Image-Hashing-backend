let http = require("http")
let path = require("path")
let formidable = require("formidable")
let util = require("util")
let port = 8000

let listener = (req, res) => {
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS, POST, GET"
        }
    console.log(req);
    if(req.url=="/health"){
        Health(req,res)
    } 
    
    else if(req.url=="/upload"){
        console.log(req);
        Upload(req,res)
    }
}
let server = http.createServer(listener)
server.listen(port)
console.log("Server is up and running on port", port)

function Health(req, res){
    res.writeHead(200, headers);
    res.end('{"data":"Ok"}')
}
function Upload(req, res){
    var form = new formidable.IncomingForm()
    form.parse(req, (error, fields, files) => {
        if(error){
        console.log(error)
        return false}
        console.log(util.inspect(files))
    })
}