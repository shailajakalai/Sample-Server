const express = require('express')
const app = express()
const port = process.env.PORT || 9080 ;
const config = require('config')
console.log(config);

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/status', (req, res) => {
    res.send('ok')
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
