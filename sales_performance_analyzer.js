//Task 1: Create a function to calculate average sales

function calculateAverageSales(sales) {
    if (sales.length === 0) return 0;
    const totalSales = sales.reduce((sum, sale) => sum + sale, 0); // Sum of elements in array
    return totalSales / sales.length; // Dividing sum by number of elements in array to find average
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
    if (salesperson.length === 0) return {topPerformer: null, bottomPerformer: null}; // salesperson name property
    const totalSales = salesperson.map(person => person.totalSales); // total sales property

    const maxSales = Math.max(...totalSales); // Determines highest sales
    const minSales = Math.min(...totalSales); // Determines lowest sales

    const topPerformer = salesperson.find(person => person.totalSales === maxSales); // Determines salesperosn with highest sales
    const bottomPerformer = salesperson.find(person => person.totalSales === minSales); // Determines salesperson with lowest sales
    
    return {
        topPerformer,
        bottomPerformer, // returns top and bottom performer properties
    };
}

//Task 4: Combine functions to generate a performance report

function generatePerformanceReport (salesInfo) {
    const salesperson = salesInfo.map(person => {
        const averageSales = calculateAverageSales(person.sales); // compute average sales for each salesperson
        const rating = determinePerformanceRating (averageSales); // assigns performance rating to each salesperson based on average sales
        return {
            name:person.name,
            averageSales: averageSales,
            performanceRating: rating,
            totalSales: person.sales.reduce ((sum, sale) => sum + sale, 0), // for findTopAndBottomPerformers function
        };
    });
    const{topPerformer, bottomPerformer} = findTopAndBottomPerformers(salesperson); // identify top and bottom performer
    return {
        salesperson: salesperson.map(person => ({
            name:person.name,
            averageSales: person.averageSales,
            performanceRating: person.performanceRating, // Summary of salesperson's name, average sales, and performance rating
        })),
        topPerformer: topPerformer ? topPerformer.name : "None",
        bottomPerformer: bottomPerformer ? bottomPerformer.name : "None",
    };
}

//Task 5: Test Your Functions with Sample Data

const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] }, // Sampla Data Set
];
const report = generatePerformanceReport(salesData);
console.log(report);