const express = require('express');
const cors = require('cors'); // Import the cors middleware
const path = require('path');
const math = require('mathjs');

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes
// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Optionally, serve index.html on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/sum', (req, res) => {
    const { a, b } = req.query;
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = numA + numB;
    return res.json({ result });
});

app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = numA * numB;
    res.json({ result });
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
    const result = numA / numB;
    res.json({ result });
});

app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = numA - numB;
    res.json({ result });
});

app.get('/calculate', (req, res) => {
    const { expression } = req.query;

    if (!expression) {
        return res.status(400).json({ error: 'No expression provided' });
    }
    try {   
        const normalizedExpression = expression.replace(/\s/g, '+');
        if (!/^[0-9+\-*/().\s]+$/.test(normalizedExpression)) {
            return res.status(400).json({ error: 'Expression contains invalid characters' });
        }
        const result = math.evaluate(normalizedExpression);
        return res.json({ result });
    } catch (error) { 
        return res.status(400).json({ error: 'Invalid expression', details: error.message });
    }
});