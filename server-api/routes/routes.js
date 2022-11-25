const express = require('express');
const Model = require('../models/models');
const router = express.Router();

//get all api
router.get('/getAll', (req, res) => {
    res.send('get all data')
})

//get by id api
router.get('/getOne/:id', (req, res) => {
    res.send(`ID: ${req.params.id}`)
})

//post api 
router.post('/post', async (req, res) => {
    // res.send('POST Method')
    const data = new Model({
        name:  req.body.name,
        age: req.body.age
    })
    try{
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.massage})
    }
})

//put/patch api
router.patch('/patch/:id', async (req, res) => {
    try {
       const id = req.params.id;
       const dataToUpdate = req.body
       const options = { new: true }

       const result = await Model.findByIdAndUpdate(
        id, dateToUpdate, options
       )
       res.send(result)
    }
    catch(error){
        res.status(400).json({ message: error.message })

    }
})

//delete api 
router.delete('/delete/:id', async (req, res) => {
    try{
        await Model.findByIdAndDelete(req.params.id)
        res.send(`${req.params.id} has been delete`)
    }
    catch(error){
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;
