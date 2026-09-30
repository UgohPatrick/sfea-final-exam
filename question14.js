function findHighestScore(scores) {
  let highest = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
    }
  }
  return highest;
}

console.log(findHighestScore([45, 82, 67, 91, 73])); // returns 91