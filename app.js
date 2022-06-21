let http = require("http")
let port = 8000

let listener = (req, res) => {
    res.end("Test")
}

let server = http.createServer(listener)
server.listen(port)
console.log("Server is up and running on port", port)