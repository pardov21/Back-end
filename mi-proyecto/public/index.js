const btn = document.querySelector("#btn")
const userForm = document.querySelector("#userForm")

btn.addEventListener("click", () => {

    fetch("/usuarios")
    .then ((res) => {
        res.json()
    })
    .then ((data) => {
        console.log("🚀 ~ data:", data)
    })
    .catch((err) => {
        console.log("Hubo un error")
    }) 

});

userForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const input = userForm.querySelector("input")
    const valor = input.value
    const usuario = {name: valor}
    const usuarioEnSting = JSON.stringify(usuario)

    fetch("/usuarios", {
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body: usuarioEnSting
    })
})

//Inciamos coneccion con servidor de Socket.io en la direccion: ws://localhost:3000
const socket = io()

socket.on("mensaje-servidor", (data) => {
    console.log("🚀 ~ data:", data)
})