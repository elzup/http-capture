const express = require('express')
const app = express()
const port = 3000

app.use(express.text())
app.use(middleware)

function middleware(req, res, next) {
  console.log('---')
  console.log('-- Host')
  console.log(req.hostname)
  console.log('-- Headers')
  console.log(req.headers)
  console.log('-- Query Params')
  console.log(req.query)
  const chunks = []

  req.on('data', (chunk) => chunks.push(chunk.toString()))
  req.on('end', function () {
    req.rawBody = chunks.join()
    console.log('-- rawBody')
    console.log(req.rawBody)
    console.log('---')
    next()
  })
}

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
