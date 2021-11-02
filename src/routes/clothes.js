'use strict';
const express = require('express');

const { clothes } = require('../models/clothes');

const clothesRouter = express.Router();

clothesRouter.get('/api/clothes', getclothes); 
clothesRouter.get('/api/clothes/:id', getOneclothes); 
clothesRouter.post('/api/clothes', createclothes); 
clothesRouter.put('/api/clothes/:id', updateclothes); 
clothesRouter.delete('/api/clothes/:id', deleteclothes); 


async function getClothes(req,res) {
    await clothes.findAll();
    res.status(200).json(allclothes);
}
async function getOneClothes(req,res) {
    const id = parseInt(req.params.id);
    const oneclothes = await clothes.findOne({
        where: {
            id:id
        }
    });
    res.status(200).json(oneclothes);
    
}
async function createClothes(req,res) {
    const obj = req.body;
  let clothes = await clothes.create(obj);
  res.status(201).json(clothes);
}
async function updateClothes(req,res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let foundclothes = await clothes.findOne({ where: { id: id } });
    const updatedclothes = await foundclothes.update(obj);
    res.status(201).json(updatedclothes);
}
async function deleteClothes(req,res) {
    const id = parseInt(req.params.id);
    const deleteclothes = await clothes.destroy({where:{id:id}});
    res.status(204).json(deleteclothes);
}

module.exports = clothesRouter;