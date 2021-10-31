/* let mensaje = "Estammos en Ciclo IV"
console.log(mensaje) */

const express = require('express')
const app = express()
const puerto = 3000

/* listen recibe 2 parametros: puerto y una función flecha */
app.listen(puerto,(mostrar_mensaje="listening activo puerto 300")=>{
    console.log(mostrar_mensaje)
})


/* Tipos de estructuras de funciones */
function nombreFuncion(parametro){
    /* ...instrucciones */
}

/* Función anónima o closure */
const salida_function = function(parametro){
    /* ...instrucciones */
}

/* Función arrow o flecha */
const function_flecha = (parametro) => {
    /* ...instrucciones */
}