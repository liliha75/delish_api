const express = require('express')
const router = express.Router( )
const ingredients = require('./ingredients')
const users = require('./users')
const categories = require('./foodCategories')


router.use('/ingredients', ingredients)
router.use('/users', users)
router.use('/foodC', categories)


module.exports = router