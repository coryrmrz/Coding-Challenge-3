//Task 1: Create a function to calculate average sales

function calculateAverageSales(sales) {
    if (salesLength === 0) return 0;
    const totalSales = sales.reduce((sum, sale) => sum + sale, 0);
    return totalSales / salesLength;
}