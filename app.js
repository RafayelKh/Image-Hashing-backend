let http = require("http")
let port = 8000

let listener = (req, res) => {
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS, POST, GET"
        }
    res.writeHead(200, headers);
/**/
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
    res.write('<input type="file" id="pic" accept=".png, .jpg, .jpeg"><br>')
    res.write('<input type="button" id="btn" value="Submit">')
    res.write('</form>')
/**/
    res.end('{"k":"Test"}') 
}
let server = http.createServer(listener)
server.listen(port)
console.log("Server is up and running on port", port)