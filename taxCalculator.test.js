const request = require('supertest');
const app = require('./index');
const { calculateTax } = require('./taxCalculator');

test('Calculates 15% tax correctly', () => {
    expect(calculateTax(100)).toBe(15);
});

test('GET /tax endpoint returns status 200 and tax amount', async () => {
    const res = await request(app).get('/tax?amount=100');
    expect(res.statusCode).toEqual(200);
    expect(res.body.tax).toEqual(15);
});