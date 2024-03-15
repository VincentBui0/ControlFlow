// Constants
const PI = 3.1415; // Value of PI
const radius = 5; // Radius of the circular garden area
const area = PI * radius * radius; // Calculate the total area of the circular garden

// Minimum space required per plant
const minSpacePerPlant = 0.8;

// Initial number of plants
let plantCount = 20;

// Function to predict plant growth after a specific number of weeks
function predictPlantGrowth(weeks) {
    // Maximum number of plants that can fit in the garden area
    const maxPlants = Math.floor(area / minSpacePerPlant);

    let currentWeek = 1;

    // Simulate plant growth by doubling the number of plants each week
    while (currentWeek <= weeks) {
        plantCount *= 2; // Double the number of plants
        currentWeek++; // Move to the next week
    }

    return plantCount; // Return the predicted plant count after the given number of weeks
}

// Function to control plant growth based on predicted growth
function controlPlantGrowth(weeks) {
    // Maximum number of plants that can fit in the garden area
    const maxPlants = Math.floor(area / minSpacePerPlant);
    
    // Calculate the final predicted plant count after the given number of weeks
    const finalPlantCount = predictPlantGrowth(weeks);

    // Control flow based on the final plant count
    if (finalPlantCount > 0.8 * maxPlants) {
        console.log("Prune the plants to avoid exceeding the garden capacity."); // Prune if plant count exceeds 80% of garden capacity
    } else if (finalPlantCount >= 0.5 * maxPlants && finalPlantCount <= 0.8 * maxPlants) {
        console.log("Monitor the growth of the plants."); // Monitor if plant count is between 50% and 80% of garden capacity
    } else {
        console.log("There is room to plant more plants."); // Plant more if plant count is less than 50% of garden capacity
    }
}

// Test the program with 1, 2, and 3 weeks of growth
console.log("After 1 week, the predicted plant count is: " + predictPlantGrowth(1));
console.log("After 2 weeks, the predicted plant count is: " + predictPlantGrowth(2));
console.log("After 3 weeks, the predicted plant count is: " + predictPlantGrowth(3));

// Control the growth after 1, 2, and 3 weeks
console.log("\nControl of plant growth after 1 week:");
controlPlantGrowth(1);
console.log("\nControl of plant growth after 2 weeks:");
controlPlantGrowth(2);
console.log("\nControl of plant growth after 3 weeks:");
controlPlantGrowth(3);


// let x = 10;
// if (x > 5) {
//     console.log("x is greater than 5");
// }

// let y = 3;
// if (y % 2 === 0) {
//     console.log("y is even");
// } else {
//     console.log("y is odd");
// }

// let hour = 13;
// if (hour < 12) {
//     console.log("Good morning!");
// } else if (hour >= 12 && hour < 18) {
//     console.log("Good afternoon!");
// } else {
//     console.log("Good evening!");
// }

// let temperature = 25;
// let raining = true;

// if (temperature > 20) {
//     if (raining) {
//         console.log("It's warm but raining.");
//     } else {
//         console.log("It's warm and not raining.");
//     }
// } else {
//     console.log("It's cold.");
// }

// let a = 10;
// let b = 5;
// let result = (a > b) ? "a is greater than b" : "b is greater than or equal to a";
// console.log(result);
