(() => {
  // Reverse Int
  const number = 123;

  const result = number.toString().split("").reverse().join("");

  console.log("result => ", parseInt(result));
  // O(log N) = If input increases by factor of 10, we do one more operation
})();
