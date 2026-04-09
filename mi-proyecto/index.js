import express from 'express';


console.log('Booting server, please wait...');
// Crear el servidor
const mi_servidor = express();

//Llamado al servidor
//Express.method(URL, callback (res,req))
mi_servidor.get("/", (req, res) => {
    res.send("Me pediste la landing")
})
mi_servidor.get("/usuarios", (req, res) => {
    res.send([{
        id: 1,
        name: "John Doe"
    },
    {
        id: 2,
        name: "Jane Doe"
    }])
})


mi_servidor.listen(3000, () => {
    console.log('Server up and running');
});
