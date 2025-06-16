// JavaScript
const prompt ({
  input: process.stdin,
  output: process.stdout
});

function calculateChaiIngredients(numberOfCups) {
  // Calculate ingredients
  const water = numberOfCups * 200;       // in ml
  const milk = numberOfCups * 50;         // in ml
  const teaLeaves = numberOfCups * 1;     // in tablespoons
  const sugar = numberOfCups * 2;         // in teaspoons
    // Print result to console
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoon${teaLeaves > 1 ? 's' : ''}`);
  console.log(`Sugar (Sukari): ${sugar} teaspoon${sugar > 1 ? 's' : ''}`);
  console.log(`\nEnjoy your Chai Bora!`);
}

const userInput = prompt('Karibu! How many cups of Chai Bora would you like to make? ');
const numberOfCups = parseInt(userInput, 10);
if (!isNaN(numberOfCups) && numberOfCups > 0) {
  console.log(`You want to make ${numberOfCups} cups.`);
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Please enter a valid number of cups.");
}
prompt.close();
