const http = require('http');

const libros=[
    {'titulo':'El señor de los anillos', 'autor':'J.R.R. Tolkien'},
    {'titulo':'El hobbit', 'autor':'J.R.R. Tolkien'},
    {'titulo':'Cancion de hielo y fuego', 'autor':'George R.R. Martin'},
    {'titulo':'Choque de reyes', 'autor':'George R.R. Martin'},
    {'titulo':'Tormenta de espadas', 'autor':'George R.R. Martin'},
    {'titulo':'Festin de cuervos', 'autor':'George R.R. Martin'},
    {'titulo':'Danza de dragones', 'autor':'George R.R. Martin'},
    {'titulo':'Juego de tronos', 'autor':'George R.R. Martin'},
    {'titulo':'El nombre del viento', 'autor':'Patrick Rothfuss'},
    {'titulo':'El temor de un hombre sabio', 'autor':'Patrick Rothfuss'},
    {'titulo': 'Harry Potter y la piedra filosofal', 'autor':'J.K. Rowling'},

    
];

const server = http.createServer((req, res) => {
    const {method, url} = req;


    let body = [];

    req.on('data', (data) => { 
        body.push(data);
    })
    .on('end', () => {
        body=Buffer.concat(body).toString();    

        let status = 404;
        const response = {
            status: 404,
            data: null
        }

        if (method === 'GET' && url === '/libros') {
            status = 200;
            response.status = 200;
            response.data = libros;    
        }else if(method === 'POST' && url === '/libros'){
            status = 200;
            const {titulo, autor} = JSON.parse(body);
            libros.push({titulo, autor});
            response.status = 200;
            response.data = libros;    
        }

        res.writeHead(status, {'Content-Type': 'application/json'});

        res.end(
            JSON.stringify({response})   
           );        
    });
  
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


