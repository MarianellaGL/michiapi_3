const express = require('express');
const routes = express.Router()
const datosDeGatitos = require('../models/gatitos')


routes.get('/',(req, res)=>{
datosDeGatitos.find()
.then((data) => res.json(data))
})

routes.get('/:id',(req, res)=>{
   const {id} =req.params
   datosDeGatitos.findById({_id: id})
   .then((data) => res.json(data))
})


routes.post('/', (req, res)=>{
datosDeGatitos(req.body)
.save()
.then((data)=>{res.json(data)})
})
//extraer el body de la request, extraer el param de la request

routes.put('/:id',(req, res)=>{
   const {id} =req.params;
   datosDeGatitos.updateOne({_id: id},{ $set:req.body})
   .then((data) => res.json(data))
})

routes.delete('/:id',(req, res)=>{
   const {id} =req.params;
   datosDeGatitos.deleteOne({_id:id})
   .then((data) => res.json(data))
})

module.exports= routes;