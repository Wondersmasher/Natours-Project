const express = require('express')
const {getUsers, getOneUser} = require('../controllers/userController')



const router = express.Router()

router.route('/').get(getUsers).post()
router.route('/:id').get(getOneUser).post()


module.exports = router