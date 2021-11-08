const express = require('express')
const userSchema = require('../models/user.js')
const router = express.Router()

// Crear un usuario
router.post('/users',(req,res)=>{
    const user = userSchema(req.body)
    user
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})

// Listando todos los usuarios existentes en la BD
router.get('/users',(req,res)=>{
    userSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})

// Consultar la info de un recurso especifico por el id
router.get('/users/:id',(req,res)=>{
    const {id} = req.params
    userSchema
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})

// Eliminar un recurso especifico por el id
router.delete('/users/:id',(req,res)=>{
    const {id} = req.params
    userSchema
        .remove({ _id: id })
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})

// Actualizar un recurso especifico por el id
router.put('/users/:id',(req,res)=>{
    const {id} = req.params
    const {name, age, email} = req.body
    userSchema
        .updateOne({ _id: id },{$set:{name, age, email}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})

module.exports = router