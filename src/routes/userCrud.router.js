const { getAll, create, getOne, remove, update } = require('../controllers/userCrud.controllers');
const express = require('express');
const userRouter = express.Router();

userRouter.route('/')
    .get(getAll)
    .post(create);

userRouter.route('/:id')  //Esto es equivalente al /users/:id
    .get(getOne)
    .delete(remove)
    .put(update);




module.exports  = userRouter;