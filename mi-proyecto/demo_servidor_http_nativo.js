/*
Servidor NET 
Servidor WEB (HTTP)

HTTP

Cliente/Request
Method(GET,POST,PATCH,DELETE) URL/IP:PORT
Header
Body

Servidor/Response
httpVersion* statusCode <-> statusMessage


*/
import http from 'http';

console.log("Booting up server, please wait...")
const mi_servidor = http.createServer()

/*
LLAMADO AL SERVIDOR
Request -> RequestListener (callback) -> Response*/
mi_servidor.on("request",(req, res)=>{
    console.log("Request received, processing...")
    console.log("URL", req.url )
    console.log("Method", req.method)
    console.log("HTTP Version", req.httpVersion)

    if(req.method === "GET" && req.url === "/"){
        res.end("Me pediste la landing")
    }

    if(req.method === "GET" && req.url === "/usuarios"){
        res.end("Me pediste un array de usuarios")
    }

    //res.end("Hola Mundo")
})

mi_servidor.listen(3000, () => {
    console.log('Server up and running!');
}
)