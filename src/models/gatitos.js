const mongoose = require('mongoose');

const datosDeGatitos = mongoose.Schema({
      __v: {
        type: Number,
        select: false
      },
      _id: {
          type: Number,
          required: true,
      },
    nombre: {
        type: String,
        required: true
    },
    raza: {
        type: String,
        required: true
    },
    aniosVida: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    random: {
        type: String,
        required: true,
    }
},)

module.exports= mongoose.model('Gatitos', datosDeGatitos);