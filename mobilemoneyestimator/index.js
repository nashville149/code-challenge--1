function estimateTransactionFee(amountToSend) {
  // Calculate 1.5% of the amount
  let fee = amountToSend * 0.015;

  // Enforce minimum and maximum fee rules
  if (fee < 10) {
    fee = 10;
  } else if (fee > 70) {
    fee = 70;
  }

  // Calculate total amount to be debited
  const total = amountToSend + fee;

  // Output results
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${total}\n`);
  console.log("Send Money Securely!");
}

// Prompt user input
const userInput = prompt("Unatuma Ngapi? (KES):");
const amount = Number(userInput);

// Validate input and call function
if (!isNaN(amount) && amount > 0) {
  estimateTransactionFee(amount);
} else {
  console.log("Tafadhali ingiza kiasi halali (a valid amount).");
}
