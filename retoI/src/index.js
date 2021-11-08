// Constantes de configuración del puerto por el que se ejecutará el proyecto
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const userRoute = require('./routes/user.js')

// Constantes de configuración de conexión con la DB
const mongoose = require('mongoose')
require('dotenv').config()

// Puerto de activación del servicio
app.listen(port, ()=>console.log('Listening por el puerto', port))
// localhost:3000/
app.get('/',(req,res)=>res.send('Bienvenido a la semana II'))

// Conexión con mongodb
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log('Conectados a mongoDB Atlas'))
    .catch((error)=>console.log(error))

// middlewares: localhost:3000/api/users: utilizar un prefijo antes de (api)
// URI de conexión para probar los request (GET, POST, DELETE, PUT)
app.use(express.json())
// localhost:3000/api/users
app.use('/api', userRoute) 

