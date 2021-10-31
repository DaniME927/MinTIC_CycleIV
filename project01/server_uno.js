/* JavaScript: Existen 3 estructuras de funciones:
   1. Estructura bàsica
   2. Function arrow o funciòn flecha
   3. Function clousure o funciòn anònima
   {}
*/

function NameFunction(){console.log('Hola Mundo')}
const FunctionArrow = ()=>{console.log('Hola Mundo')}
const FunctionClousure = function(){console.log('Hola Mundo')}

/* Funciòn flecha que recibe dos nùmeros y los suma */
let nro1 = 2
let nro2 = 3
const SumaNumeros = (nro1 = 1, nro2 = 3)=>{
    console.log(nro1 + nro2)
}
SumaNumeros()

/* Condicionales con if, switch u operadores ternarios */
let estado_activo = false
if(estado_activo == true){
    console.log('El usuario se encuentra activo')
}else{
    console.log('El usuario NO se encuentra activo') 
}

/* IF */
let estado_activo1 = false
if(estado_activo1 == true)
    console.log('El usuario se encuentra activo')
else
    console.log('El usuario NO se encuentra activo') 

/* Operadores ternarios */
let estado_activo2 = false
estado_activo2 == true ?
    console.log('El usuario se encuentra activo'):console.log('El usuario NO se encuentra activo')

/* Publicaciones de artìculos
    Artìculo 3 estados: Recibido, en evaluaciòn, rechazado */
let estado_articulo = ''
estado_articulo == 'recibido'? console.log('Se ha recibido su artìculo'):estado_articulo == 'en evaluaciòn'?
let option = 3
switch(option){
    case 1:
        console.log('opciòn 1')
        break
    case 2:
        console.log('opciòn 2')
        break
    default:
        console.log('Gracias por participar')
        break 
}