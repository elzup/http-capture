const express = require('express')
const app = express()
const port = 3000

app.use(express.text())
app.use(middleware)

function middleware(req, res, next) {
  const chunks = []

  req.on('data', (chunk) => chunks.push(chunk.toString()))
  req.on('end', function () {
    req.rawBody = chunks.join()
    next()
  })
}

app.post('/path', (req, res) => {
  console.log(req.headers)
  console.log(req.query)
  console.log(req.rawBody)

  const data = { ok: true }
  res.send(JSON.stringify(data))
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
