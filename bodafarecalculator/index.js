function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;

  const travelCost = distanceInKm * chargePerKm;
  const totalFare = baseFare + travelCost;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${travelCost}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki!");
  const userinput = prompt("Tafadhali weka umbali wa safari yako kwa kilomita (km):");
  if (userinput) {
    const distance = parseFloat(userinput);
    if (!isNaN(distance) && distance >= 0) {
      calculateBodaFare(distance);
    } else {
      console.log("Safari imekataliwa.");
  }
}

// Get the form element
const form = document.getElementById('fareForm');

// Listen for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get user input values
  const distance = parseFloat(document.getElementById('distance').value);
  const rate = parseFloat(document.getElementById('rate').value);

  // Validate input
  if (!isNaN(distance) && distance >= 0 && !isNaN(rate) && rate >= 0) {
    calculateBodaFare(distance);
  } else {
    console.log("Tafadhali weka umbali halali kwa kilomita (positive number).");
  }
});
