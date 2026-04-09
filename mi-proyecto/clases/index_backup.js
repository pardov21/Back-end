function fabricarUsuario(param1, param2){
    const persona ={
        nombre : param1,
        email: param2,
        saludar : function (){
            console.log("Hola")
        }
    }
    return persona 
}

const res_1 = fabricarUsuario("Horacio","horacio@email.com")
const res_2 = fabricarUsuario("Juan", "juan@email.com")
 
console.log(res_1);
console.log(res_2);

