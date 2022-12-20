// Script.js

// HTML Elements
let calcBtn = document.getElementById("calc-btn");
let sumOut = document.getElementById("sum-out");
let x = document.getElementById("n-in").value;

// Add Event Listener
calcBtn.addEventListener("click", calcSum);

// Event Function
function calcSum() {
  // Sum integers 1 to 100
  let total = 0;
  for (let n = 1; n <= x; n++) {
    total = total + n;
  }

  // Output The Total
  sumOut.innerHTML = total;
}
