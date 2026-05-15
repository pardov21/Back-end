//import from "http"
import express from 'express';
import {engine} from 'express-handlebars'
import {createServer} from 'http';
import {Server} from 'socket.io';


//Servidor
//Creamos una instancia de Express
const app = express();
//http://localhost:3000 Direccion del servidor
const httpServer = createServer(app);
//ws://localhost:3000 Direccion de Socket.io
const io = new Server(httpServer);

//Middleware
//Apuntamos los pedidos del servidor que no coincidan con las rutas a la carpeta public
app.use(express.static( "public" ));
//Recibimos JSON desde el frontend
app.use(express.json())

//Configuraciones (Para el frontend con handlebars)
//Le decimo a Express que es Handlebars el motor de plantillas a usar
app.engine('handlebars', engine());
//Le decimos a Express que use handlebars como motor de plantillas
app.set('view engine', 'handlebars');

const usuarios = [
    {id: 1, name: "Horacio"},
    {id: 2, name: "Maria"},
    {id: 3, name: "Pepe"}
]


//RUTAS en HTTP: GET, POST, PUT, DELETE
//Llamado al servidor
//Express.method(URL, callback (res,req))
app.get("/", (req, res) => {
res.render("index")
})
app.get("/productos", (req, res) => {
    res.render("productos")
})
app.get("/usuarios", (req, res) => {
    res.send(usuarios)
});

app.post("/usuarios", (req, res) => {
    console.log("🚀 ~ req.body:", req.body)
    usuarios.push(req.body)
    res.send("Usuario creado")
});

// Io .addEventListener("connection", (socket) => {
//     console.log("Nuevo cliente conectado");
//     socket.emit("mensaje-servidor", "Bienvenido al servidor");
io.on("connection", (socket) => {
    console.log("Nuevo cliente conectado");
})


httpServer.listen(3000, () => {
    console.log('Server up and running');
});
