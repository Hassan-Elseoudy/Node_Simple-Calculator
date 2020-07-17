const Joi = require('joi')

class CalcService {


    /**
     * @description Create an instance of CalcService
     */

    constructor() {}

    /**
     * @description Attempt to add 2 numbers together and check over them
     * We validate the two numbers using Joi validator.
     * 
     * @param postToCreate {object} Object containing 2 numbers
     * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
     */
    async addTwoNumbers(numbersToBeAdded) {
        firstNumber = parseFloat(numbersToBeAdded.firstNumber);
        secondNumber = parseFloat(numbersToBeAdded.firstNumber);

        const schema = {
            firstNumber : Joi.number().required,
            secondNumber : Joi.number().required
        }

        const validationResult = Joi.validate(numbersToBeAdded, schema)

        if (validationResult.error)
            return {
                success: false,
                error: "Two numbers aren't well formatted, please try again!"
            }

        return {
            success: true,
            body: firstNumber + secondNumber
        };
    }

    /**
     * @description Attempt to average a list of numbers together
     * @param postToCreate {object} Object containing 2 numbers
     * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
     */
    async getNumbersAverage(numbersToBeAveraged) {

        const schema = {
            numbers: Joi.array().items(Joi.number).min(1)
        }
        const validateSchema = Joi.validate(schema, numbersToBeAveraged)

        if (validateSchema.error)
            return {
                success: false,
                error: validateSchema.error.details[0].message
            }

        let sum = 0
        for (let i = 0; i < numbersToBeAveraged; i++)
            sum += numbersToBeAveraged[i]

        if (sum === 0)
            return {
                success: false,
                error: "Division By Zero!"
            }

        return {
            success: true,
            body: (sum * 1.0 / numbersToBeAveraged.length)
        };
    }

}

module.exports = CalcService;