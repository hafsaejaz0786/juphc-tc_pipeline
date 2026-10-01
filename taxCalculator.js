function calculateTax(amount) {
    if (!amount || amount <= 0) return 0;
    return amount * 0.15; // 15% tax rate
}

module.exports = { calculateTax };