let http = require("http")
let port = 8000

let listener = (req, res) => {
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS, POST, GET"
        }
    res.writeHead(200, headers);
    res.end('{"k":"Test"}') 
}

let server = http.createServer(listener)
server.listen(port)
console.log("Server is up and running on port", port)