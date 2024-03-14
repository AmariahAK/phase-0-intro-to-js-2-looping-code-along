// Code your solutions in this file
// Function to generate thank you messages for each name provided
function writeCards(names, event) {
    let thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return thankYouMessages;
  }
  
  // Function to count down from a positive integer to zero
  function countDown(num) {
    if (num <= 0) {
      console.log("Please provide a positive integer.");
      return;
    }
  
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  
  