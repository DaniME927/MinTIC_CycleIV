//console.log("Hola mundo desde nodeJS")

const express = require('express');
const mongoose = require('mongoose');
const TareaSchema = require("./modelos/Tarea.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Conexión a DB
mongoose.connect("mongodb+srv://proyecto_1:proyecto_1@clustermintic.aqbwa.mongodb.net/ActividadBD?retryWrites=true&w=majority");

// Operaciones CRUD
router.get('/', (req, res) => {
    res.send("El inicio de mi API");
})

// MOSTRAR en postman con GET localhost:3000/tarea
router.get('/tarea', (req, res) => {
    TareaSchema.find(function(err, datos){
        if(err){
            console.log("Error leyendo las tareas");
        }else{
            res.send(datos);
        }
    })
});

// CREAR en postman con POST e ingresar los valores luego enviar a la url:localhost:3000/tarea
router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    });

    nuevaTarea.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Tarea alamacenada correctamente")
    })
});

app.use(router);
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});