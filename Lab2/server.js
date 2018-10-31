const http = require('http')
const url = require('url')

const hostname = 'localhost'
const port = 8000

const server = http.createServer((req, res) => {
  res.end(`hello world`)
})

server.listen(port, hostname,() => {
  console.log('123')
})

