//Import usuario from "./Usuario.js"
const Usuario = require("./Usuario.js")

//Instancia: Intancie la clase usuario/Crear un objeto nuevo
const instancia_1 = new Usuario("Juan","juan@email.com", "123456")
const instancia_2 = new Usuario("Horacio", "Horacio@email.com", "456789")
const instancia_generico = {}

console.log(instancia_1);
console.log(instancia_2);
console.log(instancia_generico);
