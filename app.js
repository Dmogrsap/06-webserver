import express from 'express'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = 4200

// Sevir contenido estatico
app.use( express.static('public') )


app.get('/holamundo',  (req, res) => {
  res.send('Hello World!!!! en su respectiva ruta')
})

app.get(/(.*)/,  (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})