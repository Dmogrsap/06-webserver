import express from 'express'
import hbs from 'hbs';
import dotenv from 'dotenv';
dotenv.config();
//
// require('dotenv').config();
import { fileURLToPath } from 'url';
import { dirname } from 'path';

//var hbs = require('hbs');




const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
// const port = process.env.PORT || 3000;
const port = 8081;





//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático (ruta absoluta usando __dirname)
app.use( express.static(__dirname + '/public') )

app.get('/',  (req, res) => {
  res.render ('home', {
    nombre: 'Daniel Ortega',
    titulo: 'Curso de Node'
  });
})


// app.get('/generic',  (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html')
// })
app.get('/generic',  (req, res) => {
  res.render ('generic', {
    nombre: 'Daniel Ortega',
    titulo: 'Curso de Node'
  });
})

// app.get('/elements',  (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html')
// })
app.get('/elements',  (req, res) => {
  res.render ('elements', {
    nombre: 'Daniel Ortega',
    titulo: 'Curso de Node'
  });
})

app.get(/(.*)/,  (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})