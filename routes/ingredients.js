const express = require('express')
const {  getAllIngredients, createIngredient } = require('../controllers/ingredients')
const router = express.Router( )


router.get('/', getAllIngredients)
router.post('/', createIngredient)

module.exports = router