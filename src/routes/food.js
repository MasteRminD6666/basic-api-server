'use strict';
const express = require('express');

const { food } = require('../models/food');

const foodRouter = express.Router();

foodRouter.get('/api/food', getfood); 
foodRouter.get('/api/food/:id', getOneFood); 
foodRouter.post('/api/food', createFood); 
foodRouter.put('/api/food/:id', updateFood); 
foodRouter.delete('/api/food/:id', deleteFood); 


async function getfood(req,res) {
    await food.findAll();
    res.status(200).json(allfood);
}
async function getOneFood(req,res) {
    const id = parseInt(req.params.id);
    const oneFood = await food.findOne({
        where: {
            id:id
        }
    });
    res.status(200).json(oneFood);
    
}
async function createFood(req,res) {
    const obj = req.body;
  let food = await food.create(obj);
  res.status(201).json(food);
}
async function updateFood(req,res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let foundFood = await food.findOne({ where: { id: id } });
    const updatedFood = await foundFood.update(obj);
    res.status(201).json(updatedFood);
}
async function deleteFood(req,res) {
    const id = parseInt(req.params.id);
    const deleteFood = await food.destroy({where:{id:id}});
    res.status(204).json(deleteFood);
}

module.exports = foodRouter;