#!/usr/bin/env node
'use strict'

const app = require('./app').default
const meow = require('meow')

const cli = meow(
  `
	Usage
	  $ http-capture

	Options
	  --port, -p  listen port

	Examples
	  $ http-capture -p 3000
`,
  {
    flags: {
      port: {
        type: 'number',
        alias: 'p',
        default: 3000,
      },
    },
  }
)

const { port } = cli.flags
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
