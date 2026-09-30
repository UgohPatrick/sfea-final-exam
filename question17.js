
// Function logs instead of returning. So result is undefined.
//  Fix: return average not console.log(average)

// i <= scores.length causes off-by-one error.
//  On last loop scores[3]  is undefined, making total = NaN.
//  Fix: i < scores.length



function calculateAverage(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  let average = total / scores.length;
  return average;
}

const result = calculateAverage([70, 80, 90]);
console.log("Average:", result); // Average: 80