const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 6062

express()
  .use(express.static(path.join(__dirname, '../build')))
  .use(express.static(path.join(__dirname, '../public')))
  .use(express.static(path.join(__dirname, '../assets')))
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))