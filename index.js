const express = require('express');
const { calculateTax } = require('./taxCalculator');
const app = express();

app.use(express.json());

app.get('/tax', (req, res) => {
    const amount = parseFloat(req.query.amount) || 0;
    const tax = calculateTax(amount);
    res.json({ amount, tax });
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(8080, () => console.log('Server running on http://localhost:8080'));
}

module.exports = app;