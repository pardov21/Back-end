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

    saludar () {
    console.log ("Guardando en DB....")
    const promesa = new Promise ((res,rej)=>{
        setTimeout(() => {
            res()
        }, 2000);
    })  

    promesa.then(()=>{
        console.log("Saludo guardado en la DB")
    })
    
    console.log ("promesa", promesa)
    console.log("Saludo guardado en la DB")
    console.log("Envio mensaje a el recepetor")
}

    getPassword(){
        //Única manera de ver una elemento privado
        console.log(this.#password) 
    }
    
};


//Export default Usuario
export default Usuario;