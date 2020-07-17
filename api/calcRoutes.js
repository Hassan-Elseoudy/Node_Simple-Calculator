/**
 * We define all our routes for this cmponent in this file
 * to be useful to check what request we have in out application.
 */

module.exports = function(app) {
  var calculator = require('../api/calcControllers');

  /**
   * The main 2 function in the application 
   * (Add 2 numbers) => GET request and 
   * (Get Average) => POST request
   */
  app.route('/api/calc')
    .get(calculator.addTwoNumbers)
    .post(calculator.getNumbersAverage);
};