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
    res.setHeader('Content-Type', 'application/json');
    res.end(
     JSON.stringify({data:libros})   
    );
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


