const catchError = require('../utils/catchError');
const UserCrud = require('../models/UserCrud');

const getAll = catchError(async(req, res) => {
    
    const users = await UserCrud.findAll();  
    return res.json(users)
});

const create = catchError(async(req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body
    const userBody = {
        first_name, 
        last_name, 
        email,
        password, 
        birthday
    }
    const user = await UserCrud.create(userBody);
    return res.status(201).json(user);
})


const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const user  = await UserCrud.findByPk(id);
    return  res.json(user);
    
})

const remove = catchError(async(req, res) => { 
    const { id } = req.params;
    await UserCrud.destroy({ where: {id: id} });
    return res.sendStatus(204)
})


const update = catchError(async(req, res) => { 
    const { id } = req.params;
    const { first_name, last_name, email, password, birthday } = req.body
  const user =  await  UserCrud.update({
    first_name, 
    last_name, 
    email,
    password, 
    birthday
    }, { where: { id }, returning: true});
    return res.json(user);
})
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}