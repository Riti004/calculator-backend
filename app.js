const express = require('express');
const cors = require('cors'); // Import the cors middleware

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/sum', (req, res) => {
    const { a, b } = req.query;
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const sum = numA + numB;
    return res.json({ sum });
});

app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const product = numA * numB;
    res.json({ product });
});

app.get('/divide', (req, res) => {
    const { a, b } = req.query;
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    if (numB === 0) {
        return res.status(400).json({ error: 'Division by zero' });
    }
    const quotient = numA / numB;
    res.json({ quotient });
});

app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const difference = numA - numB;
    res.json({ difference });
});