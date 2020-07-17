const CalcService = require("../service/calcService");
const CalcServiceInstance = new CalcService();

/**
 * @description Adding two numbers controller, it handles request and pass the body to the service and get the result back
 * @param req {object} Express req object [2 numbers]
 * @param res {object} Express res object
 */
async function addTwoNumbers(req, res) {
    try {
        const addResult = await CalcServiceInstance.addTwoNumbers(req.body);
        return res.send(addResult);
    } catch (err) {
        res.status(400).send(err);
    }
}

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 */
async function getNumbersAverage(req, res) {
    try {
        const averageResult = await CalcServiceInstance.getNumbersAverage(req.body);
        return res.send(averageResult);
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = {
    addTwoNumbers,
    getNumbersAverage
};