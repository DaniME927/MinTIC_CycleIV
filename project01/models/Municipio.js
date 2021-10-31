const mongoose = require('mongoose');

let MunicipioSchema = new mongoose.Schema({
    idMunicipio: Number,
    name: String,
    departamento: String
})

module.exports = mongoose.model('municipio', MunicipioSchema, 'Municipios')
/* El último sería para listar */