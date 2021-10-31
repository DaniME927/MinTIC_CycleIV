const express = require('express') /* Esto es para agregar ese paquete con la palabra reservada require */
const execute_app = express() /* Esto es para inicializar */
const routes = express.Router()


const mongoose = require('mongoose')
const MunicipioSchema = require('./models/Municipio.js')

execute_app.use(express.urlencoded({extended:true}))
execute_app.use(express.json())
execute_app.use(routes)

/* Mensaje de prueba */
/* El mètodo get() recibe dos parametros, la URI y una funciòn flecha */
/* Mostrar */
routes.get('/', (req,res)=>{
    res.send('Conexión con la API')
})

/* Función flecha */
execute_app.listen(3000,()=>{
    console.log('Conexión exitosa')
})

/* Crear */
routes.post('/municipio',(req,res)=>{
    let newMunicipio = new MunicipioSchema({
        idMunicipio: req.body.id,
        name: req.body.name,
        departamento: req.body.department
    })
    newMunicipio.save(function(err,data){
        if(err)
            console.log('No se pudo crear el municipio')
        else
            res.send(data)
    })
})
/* Conexión a la BD de Atlas */
mongoose.connect("mongodb+srv://proyecto_1:proyecto_1@clustermintic.aqbwa.mongodb.net/ActividadesDB?retryWrites=true&w=majority")