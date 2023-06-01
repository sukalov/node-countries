const express = require('express')
const fs = require('fs')
const countries = require ('./restcountries.json');
const cors = require('cors');
const { time, timeStamp } = require('console');

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors());

app.get('/', (req, res) => {
  console.log('GET', new Date())
  res.json(countries)
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});