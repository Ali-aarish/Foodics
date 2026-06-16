// Report generator — Demo (summarizes an array of orders into totals)

// Takes orders like [{ total: 25 }, { total: 15 }] and returns summary totals.
const generateSalesReport = (orders = []) => {
  const orderCount = orders.length;
  const totalSales = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const avgOrder = orderCount ? totalSales / orderCount : 0;

  return {
    totalSales,
    orderCount,
    avgOrder: Number(avgOrder.toFixed(2)),
  };
};

module.exports = { generateSalesReport };
