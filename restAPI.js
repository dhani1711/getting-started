const express = require("express");
const app = express();

app.get('/coba',(req, res)=>{
  res.end("ini get XI RPL 2");
})

app.post('/coba',(req, res)=>{
  res.end("ini post XI RPL 2");
})

app.listen('8080',(e)=>{
  console.log(e)
})
