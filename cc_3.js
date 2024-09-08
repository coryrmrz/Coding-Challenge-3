//Task 1: Create a function to calculate average sales

function calculateAverageSales(sales) {
    if (sales.length === 0) return 0;
    const totalSales = sales.reduce((sum, sale) => sum + sale, 0); // Sum of elements in array
    return totalSales / salesLength; // Dividing sum by number of elements in array to find average
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
        return "Needs Improvement"; // Performance rating formula depending on amount of average sales
    }
}

//Task 3: Create a function to identify top and bottom performers

function findTopAndBottomPerformers (salesperson) {
    if (salesperson.length === 0) return {topPerformer: null, bottomPerformer: null};
    const totalSales = salesperson.map(person => person.totalSales);

    const maxSales = Math.max(...totalSales);
    const minSales = Math.min(...totalSales);

    const topPerformer = salesperson.find(person => person.totalSales === maxSales);
    const bottomPerformer = salesperson.find(person => person.totalSales === minSales);
    
    return {
        topPerformer,
        bottomPerformer
    };
}