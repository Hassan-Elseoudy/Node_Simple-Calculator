const Joi = require('joi')

class CalcService {


    /**
     * @description Attempt to add 2 numbers together and check over them
     * We validate the two numbers using Joi validator.
     * 
     * @param numbersToBeAdded {object} Object containing 2 numbers
     * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
     */
    async addTwoNumbers(numbersToBeAdded) {

        // Creating a scheme for the input
        const schema = Joi.object({
            firstNumber: Joi.number().required(),
            secondNumber: Joi.number().required()
        })

        // Validate input to be a number and required element
        const validationResult = schema.validate(numbersToBeAdded)

        if (validationResult.error) {
            return {
                success: false,
                error: validationResult.error.details[0].message
            }
        }

        // parsing the two numbers to be float
        let firstNumber = parseFloat(numbersToBeAdded.firstNumber);
        let secondNumber = parseFloat(numbersToBeAdded.secondNumber);

        return {
            success: true,
            result: firstNumber + secondNumber
        };
    }

    /**
     * @description Attempt to average a list of numbers together
     * @param postToCreate {object} Object containing 2 numbers
     * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
     */
    async getNumbersAverage(numbersToBeAveraged) {

        // Creating a scheme for the input (array name is `numbers` and validate scheme (array lenght must be +1))
        const schema = Joi.object({
            numbers: Joi.array().items(Joi.number()).min(1)
        })

        // Scheme validation
        const validateSchema = schema.validate(numbersToBeAveraged)

        if (validateSchema.error)
            return {
                success: false,
                error: validateSchema.error.details[0].message
            }

        // averaging
        let sum = 0
        for (let i = 0; i < numbersToBeAveraged.numbers.length; i++)
            sum += numbersToBeAveraged.numbers[i]

        if (sum == 0)
            return {
                success: false,
                error: "Division By Zero!"
            }

        return {
            success: true,
            result: (sum * 1.0 / numbersToBeAveraged.numbers.length)
        };
    }

}

module.exports = CalcService;