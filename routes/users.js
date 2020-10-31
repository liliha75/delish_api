const express = require('express')
const router = express.Router()
const { createUser, getAllUsers} = require('../controllers/users')
//const permissions = require('../middlewares/permissions');
// api/users
router.get('/', getAllUsers)
router.post('/', createUser)


module.exports = router
