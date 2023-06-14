const express = require('express');
const {engine} = require("express-handlebars");
const path = require('path')
const app = express(); 
const port = 3000; 
app.use(express.static(path.join(__dirname, 'src', 'public')));
app.set('view engine', 'handlebars')
app.engine('handlebars', engine());
app.set('views', path.join(__dirname, "src", "views"));
app.get('/', (req, res) => {
  res.render('home/home');
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
module.exports = app;