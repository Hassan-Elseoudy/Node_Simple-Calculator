const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.json())


app.get('/api/add', (req, res) => {
    let total = req.body.firstNumber + req.body.secondNumber;
    res.send(total)
})

app.post('/api/average', (req, res) => {

    let numbers = req.body.numbers
    let sum = 0

    for(let i = 0; i < numbers.length; i++)
        sum += numbers[i]

    if(sum === 0)
        res.status(400).send(0)
    else 
        res.status(200).send(sum * 1.0 / length(numbers))

})



app.listen(port, () => console.log('Listening on port'))