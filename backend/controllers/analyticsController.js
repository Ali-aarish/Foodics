// Analytics controller — Demo (returns canned summary stats, no database yet)

// GET /api/analytics
exports.getAnalytics = (req, res) => {
  const summary = {
    totalSales: 18450,
    totalOrders: 312,
    topItems: [
      { name: "Chicken Shawarma", sold: 120 },
      { name: "Beef Burger", sold: 95 },
      { name: "Fresh Orange Juice", sold: 80 },
    ],
  };
  res.json(summary);
};
