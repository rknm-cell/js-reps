function largestNumber(arr) {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (current > largest) {
      largest = current;
    }
  }
  return largest;
}

console.log(largestNumber([1, 2, 3, 4, 5, 6, 7]));
console.log(largestNumber([1, 2, 22, 12, 123, 44, 15, 99, 4, 5, 6, 7]));
console.log(largestNumber([1, 25, 6, 7]));
