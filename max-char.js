(() => {
  const str = "hello, world!!!";
  let maxCount = 0;
  let maxChar = "";
  let charCountObj = {};

  for (let s of str) {
    charCountObj[s] = charCountObj[s] + 1 || 1;

    if (charCountObj[s] > maxCount) {
      maxCount = charCountObj[s];
      maxChar = s;
    }
  }

  console.log("maxChar => ", maxChar);
  console.log("maxCount => ", maxCount);

  // O(N) = Because we have a for loop in our code that runs depends on N times
})();
