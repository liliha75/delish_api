const express = require('express')
const { getAllCategories,createCategory } = require('../controllers/foodCategories')
const { getAllIngredients } = require('../controllers/ingredients')
const router = express.Router( )


router.get('/', getAllCategories)
router.post('/', getAllIngredients)

module.exports = router