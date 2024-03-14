// Code your solutions in this file
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
  
  // Example usage:
  countDown(10);
  