const http = require('http');

http.createServer((req, res) => {
    // res.setHeader('Content-Disposition', 'attachment; filename=persona.csv');
    // res.writeHead(200 , {'Content-Type': 'application/csv'});

    // res.write('id, name, age, city\n');
    // res.write('1, Daniel, 37, Chihuahua\n');
    // res.write('2, Maria, 30, Monterrey\n');
    // res.write('3, Juan, 25, Guadalajara\n');

// Se serializa el objeto persona a formato JSON poara que pueda ser leida
    // res.write(JSON.stringify(persona));
    res.write ('Hola Mundo');
    res.end();
}).listen(4200);
