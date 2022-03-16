function sumArr(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

const sum1 = sumArr([1, 2, 3, 4, 5]);
console.log(sum1);
