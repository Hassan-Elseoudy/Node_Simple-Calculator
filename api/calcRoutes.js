let express = require('express');
let router = express.Router();

/**
 * We define all our routes for this cmponent in this file
 * to be useful to check what request we have in out application.
 */

const CalculatorController = require('./calcControllers')

/**
 * The main 2 function in the application 
 * (Add 2 numbers) => GET request and 
 * (Get Average) => POST request
 */

router.get('/', CalculatorController.addTwoNumbers)
router.post('/', CalculatorController.getNumbersAverage)

module.exports = router