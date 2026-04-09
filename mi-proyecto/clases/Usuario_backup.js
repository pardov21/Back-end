/*
sintaxis de clases

class <NombreDeClase>{
//Propiedades privadas
[#NombreDeProp]

//metodo constructor 
elNombre(){}

//otro metodos
[nombreDelMetodo(){}]
}
*/
//Clase
class Usuario {

     #password //privado, no se puede ver
    constructor (nombre, email, password){
        //const this.variable = {}
        this.nombre = nombre
        this.email = email   
        this.#password = password
        //Return Automatico      
    } 

    async saludar () {
    console.log ("Guardando en DB....")
    try{
        const promesa_uno = await new Promise ((res, rej)=>{
        setTimeout(() => {
            res()
        }, 2000);
    })
    console.log("Primera promesa resuelta")

        const promesa_dos = await new Promise ((res, rej)=>{
        setTimeout(() => {
            res()
        }, 2000);
    })
    console.log("Segunda promesa resuelta")
    
    } catch (error){
        console.log("Hubo un error")
    }

    /*
    const promesa = new Promise ((res,rej)=>{
        setTimeout(() => {
            res()
        }, 2000);
    })  

    .then(()=>{
        console.log("Saludo guardado en la DB")
    })
    .catch(()=>{
        console.log("Error al guardar datos")
    })
    .finally (()=>{
        console.log("Termino la promesa")
    })
    
    console.log ("promesa", promesa)
    console.log("Saludo guardado en la DB")
    */
    console.log("Envio mensaje a el recepetor")
}

    getPassword(){
        //Única manera de ver una elemento privado
        console.log(this.#password) 
    }
    
};


//Export default Usuario
export default Usuario;