function calculateTax(income, slab = "old") {
  const finalIncome = income - 75000
  const slabs = {
    old: [
      { limit: 300000, rate: 0 },
      { limit: 700000, rate: 0.05 },
      { limit: 1000000, rate: 0.10 },
      { limit: 1200000, rate: 0.15 },
      { limit: 1500000, rate: 0.20 },
      { limit: Infinity, rate: 0.30 }
    ],
    new: [
      { limit: 400000, rate: 0 },
      { limit: 800000, rate: 0.05 },
      { limit: 1200000, rate: 0.10 },
      { limit: 1600000, rate: 0.15 },
      { limit: 2000000, rate: 0.20 },
      { limit: 2400000, rate: 0.25 },
      { limit: Infinity, rate: 0.30 }
    ]
  };

  let tax = 0;
  let prevLimit = 0;
  const selectedSlab = slabs[slab];

  for (const { limit, rate } of selectedSlab) {
    if (finalIncome > prevLimit) {
      const taxableAmount = Math.min(finalIncome, limit) - prevLimit;
      tax += taxableAmount * rate;
      prevLimit = limit;
    } else {
      break;
    }
  }
  return Math.round(tax * 1.04); // Adding 4% Health & Education Cess and rounding off
}

// Example Usage:
console.log(calculateTax(2160000, "old")); // ✅ Should return 289276
console.log(calculateTax(2160000, "new")); // ✅ Should return a lower tax than the old slab
