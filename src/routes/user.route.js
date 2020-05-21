const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

// Receive all user

router.get('/',userController.findAll) // Access to action findAll of userController

router.get('/:id',userController.findOne)

router.post('/',userController.create)
// simple endpoint

router.put('/:id',userController.update)

router.delete('/:id',userController.delete)

module.exports = router;