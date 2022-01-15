const express = require('express');
const router = express.Router();
const { asyncWrapper } = require('../../helpers');
const {UserController} = require('../../contollers');


router.post('/register', asyncWrapper(UserController.register));

module.exports = router;