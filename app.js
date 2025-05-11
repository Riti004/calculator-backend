const express  = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get('/sum', (req, res) => {
    // extract query parameters
    const { a, b } = req.query;
    // convert to numbers
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    // check if both are numbers
    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    // calculate sum
    const sum = numA + numB;
    // send response
    return res.json({ sum });
});

app.get('/multiply', (req, res) => {
    // extract query parameters
    const { a, b } = req.query;
    // convert to numbers
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    // check if both are numbers
    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    // calculate product
    const product = numA * numB;
    // send response
    res.json({ product });
});

app.get('/divide', (req, res) => {
    // extract query parameters
    const { a, b } = req.query;
    // convert to numbers
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    // check if both are numbers
    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    // check for division by zero
    if (numB === 0) {
        return res.status(400).json({ error: 'Division by zero' });
    }
    // calculate quotient
    const quotient = numA / numB;
    // send response
    res.json({ quotient });
});

app.get('/subtract', (req, res) => {
    // extract query parameters
    const { a, b } = req.query;
    // convert to numbers
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    // check if both are numbers
    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    // calculate difference
    const difference = numA - numB;
    // send response
    res.json({ difference });
});