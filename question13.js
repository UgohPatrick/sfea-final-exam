const numbers = [12, 7, 4, 19, 8, 21, 10];

let evenSum = 0;
let oddCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenSum += numbers[i]; // sum of even
  } else {
    oddCount++; // count of odd
  }
}

console.log("Sum of even numbers:", evenSum); // 34 (12+4+8+10)
console.log("Number of odd numbers:", oddCount); // 3 (7,19,21)