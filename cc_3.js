//Task 1: Create a function to calculate average sales

function calculateAverageSales(sales) {
    if (salesLength === 0) return 0;
    const totalSales = sales.reduce((sum, sale) => sum + sale, 0);
    return totalSales / salesLength;
}

//Task 2: Create a function to determine performance rating

function determinePerformanceRating (averageSales) {
    if (averageSales > 10000) {
        return "Excellent";
    } else if (averageSales >= 7000) {
        return "Good";
    } else if (averageSales >= 4000) {
        return "Satisfactory";
    } else {
        return "Needs Improvement";
    }
}