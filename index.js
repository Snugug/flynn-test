var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><title>Hello</title></head><body><h1>Hello World</h1></body></html>')
});

app.listen();